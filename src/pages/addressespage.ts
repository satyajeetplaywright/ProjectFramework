import { Page } from "@playwright/test";

export class Addressespage {

    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    // locators

    private addAddress_button = `(//a[@title='Add an address'])[1]`;
    private addedAddress_text = `(//span[@class='w-100 lh-sm text-break d-block'])[1]`;

    // Actions

    public async clickOnAddAddressButton() {
        await this.page.locator(this.addAddress_button).click();
    }

    public async getNewAddressText() {
        let newAddress = await this.page.locator(this.addedAddress_text).textContent();
        return newAddress;
    }

}