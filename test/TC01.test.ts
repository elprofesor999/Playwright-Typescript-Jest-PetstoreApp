import { Page } from "playwright"
import Environment from "../utils/environment"
import { Severity } from "jest-allure/dist/Reporter";
import signInActions from "../actions/signIn.actions";


declare const page : Page
declare const reporter : any

describe("US-1001 TS-001 Petstore Login TestSuite", () => {

    let login         : signInActions
    
    beforeAll(async()=>{
        await page.goto(Environment.test)
        login   = new signInActions()

    })

    test("TC001 - Go to PetStore Application and Click SignIn", async () => {
        await reporter
        .description("User should be able to land in PetStore Application successfully with given URL.")
        .severity(Severity.Critical)
        await login.getScreenshot("Signin - Petstore Application")
        await login.clickSignIn()
        await login.verifyLoginLogoutPage()
    })

    test("TC002 - Enter username and password", async () => {
        await reporter
        .description("User should be able to enter username and password successfully in  PetStore Application Signin Page.")
        .severity(Severity.Critical)
        await login.clickSignIn()
        await login.enterUserNm("cgtdemo")
        await login.enterPwd("cgtdemo")
        await login.getScreenshot("After entering credentials")
    })

    test("TC003 - Login to PetStore Application", async () => {
        await reporter
        .description("User should be able to login Petstore application successfully Signin Page.")
        .severity(Severity.Critical)
        await login.clickLogin()
        await login.verifyHomePage()
        await login.getScreenshot("Homepage - Petstore Application")

    })

    test("TC004 - Signout the PetStore Application", async () => {
        await reporter
        .description("User should be able to signout Petstore application successfully from Home Page.")
        .severity(Severity.Critical)
        await login.clickSignOut()
        await login.verifyLoginLogoutPage()
        await login.getScreenshot("Signout - Petstore Application")

    })

    afterAll(async() => {
        await page.close()
    })

})