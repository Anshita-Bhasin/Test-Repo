export class registerPage {


    weblocators = {

        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        confirmpassword: '#input-confirm',
        policycheckbox: 'input[type="checkbox"]',
        continue: '.btn.btn-primary'
    }

    openURL() {

        cy.visit(Cypress.env('URL'))
    }
    enterFirstName(firstName) {
        cy.get(this.weblocators.firstName).type(firstName)
    }

    enterlastName(lastName) {
        cy.get(this.weblocators.lastName).type(lastName)
    }

    enterEmail(email) {

        cy.get(this.weblocators.email).type(email)
    }
    enterTelephone(phoneNo) {

        cy.get(this.weblocators.telephone).type(phoneNo)
    }
    enterPassword(password) {
        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.confirmpassword).type(password)

    }
    selectCheckbox() {

        cy.get(this.weblocators.policycheckbox).check()
    }

    clickOnContinue() {
        cy.get(this.weblocators.continue).click()
    }

}