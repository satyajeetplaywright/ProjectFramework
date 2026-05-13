import { Page } from "@playwright/test";

export class Deliveryaddresspage {

    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    // locators

    private yourname_textbox = `//input[@id='o_name']`;
    private email_textbox = `//input[@id='o_email']`;
    private phone_textbox = `//input[@id='o_phone']`;
    private streetAndNumber_textbox = `//input[@id='o_street']`;
    private city_textbox = `//input[@id='o_city']`;
    private zipCode_textbox = `//input[@id='o_zip_after_city']`;
    private saveAddress_button = `//button[@id='save_address']`;

    // actions

    public async enterYourName(name: string) {
        await this.page.locator(this.yourname_textbox).fill(name);
    }

    public async enterEmail(email: string) {
        await this.page.locator(this.email_textbox).fill(email);
    }

    public async enterPhone(phone: string) {
        await this.page.locator(this.phone_textbox).fill(phone);
    }

    public async enterStreetName(street: string) {
        await this.page.locator(this.streetAndNumber_textbox).fill(street);
    }

    public async enterCity(city: string) {
        await this.page.locator(this.city_textbox).fill(city);
    }

    public async enterZipcode(zipcode: string) {
        await this.page.locator(this.zipCode_textbox).fill(zipcode);
    }

    public async clickOnSaveAddressButton() {
        await this.page.locator(this.saveAddress_button).click();
    }
    
}