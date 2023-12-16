// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { LoginPage } = require("../e2e/page objects/login_page")
const loginPage = new LoginPage()

Cypress.Commands.add('SuperAdminLogin',(userName,password)=>{
    loginPage.inputEmail(userName)
    loginPage.inputPassword(password)
    loginPage.clickSignInButton()

    // cy.get('#email').type(userName)
    // cy.get('#password').type(password)
    // cy.get(':nth-child(5) > .btn').click()
    cy.get('.card-body').contains('Manager View').click()
    cy.get('.alert').contains('Accept').click()
})