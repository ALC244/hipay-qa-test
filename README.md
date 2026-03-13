# 🧪 HiPay – QA Automation Test (CodeceptJS)

## 📋 1. Objective

This project demonstrates an automated test approach for the **HiPay Fraud Management contact form**:

<https://hipay.com/en/our-solutions/fraud-management/#contact>

The objective is to validate that a potential merchant can successfully contact HiPay through the website.

The automated tests verify that a user can:

- Access the contact form
- Fill in the required fields
- Submit the form successfully

The tests are implemented using **CodeceptJS**, **Playwright**, and **BDD (Gherkin)**.

Using Gherkin syntax ensures that test scenarios remain readable by both **technical and non-technical stakeholders** (QA, Product, Business).

## 🧠 2. Testing Scope

The contact form is embedded using **HubSpot**, meaning that the submission is handled by a third-party service.

Therefore, the automated tests focus on validating:

- User interaction with the form
- Required field validation
- Correct submission behavior

Out of scope:

- HubSpot backend processing
- CRM lead creation

## 3. Installation & Setup

### Requirements

- Node.js ≥ 18
- npm ≥ 9

### Install dependencies

```bash
npm install
```

### Install Playwright browsers

```bash
npx playwright install chromium
```

## 4. Run tests

Run the full test suite with detailed execution steps and report:

```bash
npm test
```

The HTML report is generated in:

```bash
output/index.html
```
## 5. Project Structure

```bash
hipay-qa-test
│
├─ tests
│   ├─ contact.feature        # BDD test scenarios
│   └─ contactSteps.js        # Step definitions
│
├─ pages
│   └─ contactPage.js         # Page Object Model
│
├─ data
│   └─ jeanMartin.json       # Test dataset
│
├─ output                     # Test reports
│
├─ codecept.conf.js           # CodeceptJS configuration
├─ package.json               # Dependencies & scripts
├─ QA Analyst FrontEnd - Test technique HiPay.md  # Original exercise description
└─ README.md
```

## 6. Tests

### Scenarios

file : contact.feature

#### Scenario 1: Successful contact form submission

> Steps:
>
> - Open the HiPay fraud management contact form
> - Fill in required fields with valid data
> - Submit the form
> - Verify that the submission is successful

#### Scenario 2: Validation errors on submission

Steps:
>
> - Open the HiPay fraud management contact form
> - Validate specific fields with valid and invalid data

### Test data

Test data is stored in:

```bash
data/jeanMartin.json
```

Example dataset:

```bash
{
  "lastName": "Martin",
  "firstName": "Jean",
  "email": "Martin.Jean@gmail.com",
  "phone": "+33612345678",
  "website": "https://www.linkedin.com/in/martinjean12/",
  "revenue": "Less than 500 000€",
  "businessModel": "Online",
  "message": "QA automation test message"
}
```

The dataset uses realistic data to ensure stable form submission.
A unique identifier is added for some fields to help track test executions if needed.

### Test structure

The automation follows the Page Object Model (POM) pattern.

Benefits:

- Clear separation between test logic and page interactions
- Easier maintenance if the UI changes
- Reusable actions across scenarios

### Test execution strategy

The test suite uses scenario tags to support targeted execution:

- `@smoke` critical user flows
- `@validation` form validation scenarios

Examples:

```bash
npm run test:smoke  
npm run test:validation
```
