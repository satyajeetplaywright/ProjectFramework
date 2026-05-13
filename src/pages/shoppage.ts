import { Page } from "@playwright/test";

export class Shoppage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // locators
    private samsungGalaxyBookAddToCart_button = `//*[@id="o_wsale_products_grid"]/div[1]/div/article/div[2]/div[2]/div[2]/div/button/span`;
    private cart_button = `(//i[contains(@class,'shopping-cart fa-stack')])[1]`;

    // actions

    public async clickOnSamsungGalaxyBookOfAddToCartButton() {
        await this.page.locator(this.samsungGalaxyBookAddToCart_button).click();
    }

    public async clickOnCartButton() {
        await this.page.locator(this.cart_button).click();
    }
}