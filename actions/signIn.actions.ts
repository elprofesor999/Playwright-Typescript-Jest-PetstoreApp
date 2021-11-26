import petStoreLoginPage from "../pages/signIn.page";

declare const reporter: any
let petStoreSignIn : petStoreLoginPage = new petStoreLoginPage(page)

export default class signInActions {

    //Actions

    public async clickSignIn() {
        const ele = await petStoreSignIn.eleSignIn();
        if (ele != null)
            await ele.click()
        else throw new Error("No element found")
    }

    public async clickSignOut() {
        const ele = await petStoreSignIn.eleSignOut()
        if (ele != null)
            await ele.click()
        else throw new Error("No element found")
    }

    public async enterUserNm(userNm : string) {
        const ele = await petStoreSignIn.eleUserNm()
        if (ele != null)
            await ele.fill(userNm)
        else throw new Error("No element found")
    }

    public async enterPwd(pwd : string) {
        const ele = await petStoreSignIn.elePwd()
        if (ele != null)
            await ele.fill(pwd)
        else throw new Error("No element found")
    }

    public async clickLogin() {
        const ele = await petStoreSignIn.eleLogin()
        if (ele != null)
            await ele.click()
        else throw new Error("No element found")
    }

    public async verifyHomePage() {
        const ele = await petStoreSignIn.eleWelcomeScreen()
        if (ele != null)
            expect(await ele.innerText()).toBe("Welcome cgtdemo!")
         else throw new Error("Welcome page not landed!!!")
    }

    public async verifyLoginLogoutPage() {
        const ele = await petStoreSignIn.eleSignIn()
        if (ele != null)
        expect(await ele.innerText()).toBe("Sign In")
         else throw new Error("Welcome page not landed!!!")
    }


    public async getScreenshot(description?: string) {
        const screenshotBuffer = await page.screenshot();
        description = description != undefined ? description : "screenshot";
        await reporter.addAttachment(description, screenshotBuffer, "image/png");
    }


}