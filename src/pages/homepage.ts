import { Page } from "@playwright/test";

export class Homepage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // locator
    private signInLink = `role=link[name="Sign in"]`;
    private shopLink = `//div[@id='o_main_nav']/ul/li/a/span[text()='Shop']`;

    // actions
    public async clickOnSignInLink() {

        await this.page.locator(this.signInLink).waitFor({
            state: "visible"
        });

        await this.page.locator(this.signInLink).click();
    }

    public async clickOnShopLink() {

        await this.page.locator(this.shopLink).waitFor({
            state: "visible"
        });

        await this.page.locator(this.shopLink).click();
    }



}