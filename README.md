# Cypress Enterprise Test Automation

[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
[![CI Status](https://img.shields.io/github/actions/workflow/status/nlaky1/CypressAutomationPractice/cypress.yml?branch=main&label=CI%20Pipeline)](https://github.com/nlaky1/CypressAutomationPractice/actions)
[![Cypress Version](https://img.shields.io/badge/cypress-v13+-blue.svg)](https://docs.cypress.io)

This repository contains a robust, enterprise-grade End-to-End (E2E) testing framework built with [Cypress](https://www.cypress.io/). It validates the UI functionality, DOM interactions, and API integrations of an e-commerce platform using modern automation best practices.

---

## 🎯 Architecture & Best Practices

This framework is built to scale and prioritize maintainability, using:

- **Page Object Model (POM):** Abstracting UI locators and actions into reusable classes (located in `cypress/support/pageObjects/`) to reduce duplication and make tests resilient to UI changes.
- **Data-Driven Testing (DDT):** Test data is completely separated from test logic using Cypress `fixtures`, allowing for multi-data execution without changing test code.
- **Custom Commands:** Encapsulated complex or repetitive sequences (e.g., adding dynamic products to the cart) into reusable `cy.command()` functions.
- **Modern Cypress Architecture (v13+):** Compliant with the latest Cypress configuration standards (`cypress.config.js`) and `e2e` directory structure.
- **CI/CD Integration:** Automated execution on every push and PR using **GitHub Actions**, ensuring code quality is validated continuously.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v8 or higher)

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/nlaky1/CypressAutomationPractice.git
cd CypressAutomationPractice
npm install
```

### Running Tests

Execute the tests headlessly (ideal for CI/CD environments):
```bash
npm run test
```

Execute tests in the interactive Cypress Test Runner:
```bash
npm run test:headed
```

Run tests specifically on Chrome:
```bash
npm run test:chrome
```

---

## 📁 Project Structure

```
CypressAutomationPractice/
├── .github/workflows/          # CI/CD Pipeline configuration (GitHub Actions)
├── cypress/
│   ├── e2e/                    # Test Specifications
│   │   ├── examples/           # Core functionality and E2E workflow tests
│   │   └── GreenKart/          # Specific module tests for the GreenKart application
│   ├── fixtures/               # Static test data (JSON)
│   └── support/                # Core framework files
│       ├── pageObjects/        # Page Object classes (HomePage, ProductPage, etc.)
│       ├── commands.js         # Custom Cypress commands
│       └── e2e.js              # Global test setup and imports
├── cypress.config.js           # Cypress configuration
└── package.json                # Project dependencies and scripts
```

---

## 🧪 Key Test Scenarios Covered

1. **End-to-End Checkout Flow:**
   - Dynamically selecting products based on data fixtures.
   - Validating cart calculations and total sum dynamically.
   - Handling multi-step checkout processes including dropdowns and checkboxes.
2. **UI & DOM Validation:**
   - Validating visibility, element count, and specific attributes dynamically.
   - Form validation, including two-way data binding and input restrictions.
3. **API & Mocking:**
   - Intercepting HTTP requests (`cy.intercept()`) to validate request payloads, response data, and application behavior under various network conditions.
4. **Window & Tab Handling:**
   - Handling links that open in new tabs or child windows by manipulating DOM attributes (`target="_blank"`).
5. **Web Tables & Alerts:**
   - Traversing complex DOM trees to validate web table data.
   - Managing and validating browser alerts and popups.

---

## 👤 Author

**Nikhil Laky**  
Senior SDET | AI Agent Reliability & Test Automation  
[LinkedIn](https://linkedin.com/in/nikhil-laky) | [GitHub](https://github.com/nlaky1)
