// ====================
// Imports
// ====================

const { I, contactPage } = inject();
const fs = require('fs');
const path = require('path');

// ====================
// Helpers
// ====================

function buildUniqueId() {
  return Date.now().toString();
}

function buildUniqueContactData(baseData) {
  const uniqueId = buildUniqueId();

  return {
    ...baseData,
    lastName: `${baseData.lastName}[${uniqueId}]`,
    email: baseData.email.replace('@', `+${uniqueId}@`),
    website: `${baseData.website}${uniqueId}`,
    message: `${baseData.message} [${uniqueId}]`
  };
}

// ====================
// Actions
// ====================

Given('I open the HiPay fraud management contact page', () => {
  contactPage.open();
});

When('I fill the contact form with a valid dataset {string}', (datasetName) => {
  const datasetPath = path.join(__dirname, '..', 'data', `${datasetName}.json`);

  const baseData = JSON.parse(
    fs.readFileSync(datasetPath, 'utf-8')
  );

  const contactData = buildUniqueContactData(baseData);

  contactPage.fillForm(contactData);
});

When('I submit the form', () => {
  contactPage.submit();
});

When('I close the error message', () => {
  contactPage.closeErrorMessage();
});

When('I fill the {string} field with {string}', (field, value) => {
  contactPage.fillField(field, value);
});

// ====================
// Assertions
// ====================

Then('I should see the contact form {string}', (title) => {
  I.see(title, contactPage.fields.section);
  contactPage.seeForm();
});

Then('the form should be submitted successfully', () => {
  contactPage.seeSuccessMessage();
});

Then('I should see the error message for {string}', (errorKey) => {
  contactPage.seeErrorMessage(errorKey);
});

Then('I should not see errors on required fields', () => {
  contactPage.seeNoErrorsOnRequiredFields();
});

Then('I should see errors on all required fields', () => {
  contactPage.seeErrorsOnRequiredFields();
});