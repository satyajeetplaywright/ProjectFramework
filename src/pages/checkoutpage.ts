import { Page } from "@playwright/test";

export class Checkoutpage
 {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //locators

    private confirm_button = `(//a[@name='website_sale_main_button'])[1]`;

    //actions

    public async clickOnConfirmButton() {
        await this.page.locator(this.confirm_button).click();
    }



}