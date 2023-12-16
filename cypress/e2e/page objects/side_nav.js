import { BasePage } from "./base_page";

export class SideNav extends BasePage{

    sideNaveMenuLocator = 'div[class*="panel-collapse collapse in show"]'


    clickSideNaveItem(itemName){
        cy.get('#side-nav a').contains(itemName).click()
    }

    clickSideNaveSubMenuItem(menuItem,subMenuItem){
        // cy.get('a').contains(menuItem).should('have.text',menuItem)
        // cy.get('a').contains(menuItem).click()

        cy.get(this.sideNaveMenuLocator).contains(subMenuItem).should('have.text',subMenuItem)
        cy.get(this.sideNaveMenuLocator).contains(subMenuItem).click()
        
    }
}