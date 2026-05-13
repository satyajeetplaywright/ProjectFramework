import { Page } from "@playwright/test";

export class Cartpage
 {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //locators

    private checkout_button = `//a[@name='website_sale_main_button']/span[text()='Checkout']`;

    //action

    public async clickOnCheckoutButton() {
        await this.page.locator(this.checkout_button).click();
    }

}