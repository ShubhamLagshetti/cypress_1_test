import { BasePage } from "./base_page";
export class LoginPage extends BasePage {
   formLocator = 'app-login';
   emailInputLocator = 'input#email';
   passwordInputLocator = 'input#password';
   signInButtonLocator = 'input[value="Sign In"]';

inputEmail(email)  {
    cy.get(emailInputLocator).type(email);
  };

inputEmail(email) {
    cy.get(this.emailInputLocator).type(email);
};

inputPassword (password) {
    cy.get(this.passwordInputLocator).type(password);
};

clickSignInButton () {
    cy.get(this.signInButtonLocator).click();
};

getButton (name)  {
    return cy.get('button').contains(name)
};

getLink (linkName)  {
    return cy.get('a').contains(linkName);
};

}
