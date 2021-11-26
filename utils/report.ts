import { Page } from "playwright";

declare const reporter: any;
declare const page: Page;
export default class ReportUtils {


    public static async screenshot(description?: string) {
        const screenshotBuffer = await page.screenshot();
        description = description != undefined ? description : "screenshot";
        await reporter.addAttachment(description, screenshotBuffer, "image/png");
    }

}