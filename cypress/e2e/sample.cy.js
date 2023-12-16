///  <reference types= "cypress" />

import { LoginPage } from "./page objects/login_page";
import { SideNav } from "./page objects/side_nav";

const loginPage = new LoginPage()
const sideNav = new SideNav()
describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.SuperAdminLogin(Cypress.env('username'),Cypress.env('password'))
    
  });
  it('case1', () => {
    // sideNav.clickSideNaveItem('Training & Development')
    // sideNav.clickSideNaveSubMenuItem('Training & Development','Skill Specialization')
    // cy.contains('Skill Specializations').click()

    // cy.contains('Employees').click()
    sideNav.clickSideNaveItem('Employees')
    cy.get('tbody a').should('contains.text','demo Test')
    const button = loginPage.getLink('demo Test')
    button.click()
    // cy.contains('demo Test').click()
    cy.get('app-profile-skills-display.ng-tns-c35-1').should('contains.text', 'Leadership')
    cy.get('a').contains('Edit').click()
    cy.contains('Informatica').click()
    cy.get('popover-container').contains('Advanced').click()
    // cy.get('button').contains('Assessments').click({force:true})
    cy.debug()
  })

  // it('case2', () => {
      
  //   cy.contains('Employees').click()
  //   cy.get('tbody a').should('contains.text','demo Test')
  //   cy.contains('demo Test').click()
  //   cy.get('app-profile-skills-display.ng-tns-c35-1').should('contains.text', 'Leadership')
  //   cy.get('.right-action > .btn').click()
  //   cy.contains('Informatica').click()
  //   cy.get('popover-container').contains('Advanced').click()
  //   // cy.get('button').contains('Assessments').click({force:true})
  //   // cy.debug()
  // })
})