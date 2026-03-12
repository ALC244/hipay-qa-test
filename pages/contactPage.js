// ====================
// Imports
// ====================

const { I } = inject();
const CONTACT_PAGE_URL = 'https://hipay.com/en/our-solutions/fraud-management/#contact';

module.exports = {

  // ====================
  // Selectors
  // ====================

  fields: {
    section: '#contact',
    form: '#contact form',
    lastName: '#contact form input[name="lastname"]',
    firstName: '#contact form input[name="firstname"]',
    email: '#contact form input[name="email"]',
    phone: '#contact form input[name="phone"]',
    website: '#contact form input[name="website"]',
    revenue: '#contact form select[name="annual_revenue__in_euros_"]',
    businessModel: '#contact form select[name="business_model"]',
    message: '#contact form textarea[name="message"]',
    submitButton: '#contact form input[type="submit"]'
  },

  // ====================
  // Messages
  // ====================

  messages: {
    submission: 'Thank you for your request'
  },

  errors: {
    form: 'Please complete all required fields.',
    email: 'Please enter a valid email address.',
    phone: 'A valid phone number may only contain numbers, +()-. or x',
    phoneRange: 'The number you entered is not in range.'
  },

  // ====================
  // Navigation
  // ====================

  open() {
    I.amOnPage(CONTACT_PAGE_URL);
  },

  // ====================
  // Actions
  // ====================

  fillForm(data) {
    I.fillField(this.fields.lastName, data.lastName);
    I.fillField(this.fields.firstName, data.firstName);
    I.fillField(this.fields.email, data.email);
    I.fillField(this.fields.phone, data.phone);
    I.fillField(this.fields.website, data.website);
    I.selectOption(this.fields.revenue, data.revenue);
    I.selectOption(this.fields.businessModel, data.businessModel);
    I.fillField(this.fields.message, data.message);
  },

  fillField(field, value) {
    const selector = this.fields[field];

    if (!selector) {
      throw new Error(`Unknown field: ${field}`);
    }

    I.fillField(selector, value);
  },

  submit() {
    I.click(this.fields.submitButton);
  },

  closeErrorMessage() {
    I.click(this.fields.closeErrorButton);
  },

  // ====================
  // Assertions
  // ====================

  seeForm() {
    I.seeElement(this.fields.form);
    I.seeElement(this.fields.lastName);
    I.seeElement(this.fields.firstName);
    I.seeElement(this.fields.email);
    I.seeElement(this.fields.phone);
    I.seeElement(this.fields.website);
    I.seeElement(this.fields.revenue);
    I.seeElement(this.fields.businessModel);
    I.seeElement(this.fields.message);
    I.seeElement(this.fields.submitButton);
  },

  seeSuccessMessage() {
    I.waitForText(this.messages.submission, 10, this.fields.section);
    I.see(this.messages.submission, this.fields.section);
  },

  seeErrorMessage(errorKey) {
    I.see(this.errors[errorKey], this.fields.section);
  },

  seeNoErrorsOnRequiredFields() {
    I.dontSeeElement(`${this.fields.section} .hs-input.error`);
  },
};