import { registerPage } from "../../pages/registerPage"
import registerData from '../../fixtures/registerData.json'

const register = new registerPage()

describe('Cypress Automation', () => {


    it('Register Flow', () => {

        register.openURL()
        register.enterFirstName(registerData.firstName)
        register.enterlastName(registerData.lastName)
        register.enterEmail(registerData.email)
        register.enterTelephone(registerData.telephone)
        register.enterPassword(registerData.password)
        register.selectCheckbox()
        register.clickOnContinue()


    })

})