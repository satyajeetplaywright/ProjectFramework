import { Page } from "@playwright/test";

export class Confirmationpage
 {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // locators

    private thankyou_text = `//h3`;

    // actions

    public async getThankYouText() {
        let ThankYouText = await this.page.locator(this.thankyou_text).textContent();
        return ThankYouText;
    }

}