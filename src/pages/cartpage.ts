import { Page } from "@playwright/test";

export class Cartpage
 {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //locators

    private checkout_button = `//a[@name='website_sale_main_button']/span[text()='Checkout']`;
    private remove_link = `//button[contains(text(),'Remove')]`;
    private cartEmpty_text = `(//h5)[2]`;

    //action

    public async clickOnCheckoutButton() {
        await this.page.locator(this.checkout_button).click();
    }

    public async clickOnRemoveLink() {
        await this.page.locator(this.remove_link).waitFor({ state: 'visible' });
        await this.page.locator(this.remove_link).click();
    }

    public async getEmptyCartText() {
        let cartEmptyText = await this.page.locator(this.cartEmpty_text).textContent();
        return cartEmptyText;
    }

}