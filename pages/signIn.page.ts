import { Page } from "playwright";

export default class petStoreLoginPage {

    private page : Page

    constructor(page : Page) {
        this.page = page;
    }

    //Locators

    eleSignIn = async () => await this.page.$("text=Sign In")

    eleUserNm = async () => await this.page.$("input[name='username']")

    elePwd    = async () => await this.page.$("input[name='password']")    

    eleLogin  = async () => await this.page.$("input[value='Login']") 

    eleWelcomeScreen = async () => await this.page.waitForSelector("div[id='WelcomeContent']")

    eleSignOut = async () => await this.page.$("text=Sign Out")

}