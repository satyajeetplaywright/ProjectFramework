import { Page } from "@playwright/test";

export class Paymentmethodpage {

    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    // locator

    private paymentDetails_textbox = `//input[@id='customer_input']`;
    private save_button = `//button[text()='Save']`;
    private paymentDetails_text = `(//div[@class='col'])[1]`;

    // actions

    public async enterPaymentDetails(paymentdata: string) {
        await this.page.locator(this.paymentDetails_textbox).fill(paymentdata);
    }

    public async clickOnSaveButton() {
        await this.page.locator(this.save_button).click();
    }

    public async getPaymentDataText() {
        let paymentDetails = await this.page.locator(this.paymentDetails_text).textContent();
        return paymentDetails;
    }

}