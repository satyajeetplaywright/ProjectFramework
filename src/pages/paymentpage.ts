import { Page } from "@playwright/test";

export class Paymentpage
 {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // locators

    private iagree_checkbox = `(//input[@id='website_sale_tc_checkbox'])[1]`;
    private paynow_button = `(//div[@name='o_payment_default_submit_labels'])[1]`;
    private skipnow_link = `//a[@class='alert-link ms-auto text-nowrap']`;

    // actions

    public async clickOnIagreeCheckBox() { 
        await this.page.locator(this.iagree_checkbox).click();
    }

    public async clickOnPayNowButton() {
        await this.page.locator(this.paynow_button).click();
    }

    public async clickOnSkipNowButton() {
        await this.page.locator(this.skipnow_link).click();
    }

}