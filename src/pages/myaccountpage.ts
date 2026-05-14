import { Page } from "@playwright/test";

export class Myaccountpage {

    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    //locators
    
    private account_dropdown = `(//li[contains(@class,'dropdown')])[1]`;
    private logout_button = `(//button[@id='o_logout'])[1]`;
    private myAccount_button = `(//a[@class='dropdown-item ps-3'])[1]`;
    private paymentMethod_link = `//h5[text()='Payment Methods']`;
    private Addresses_link = `//h5[text()='Addresses']`;
    private connectionAndSecurity_link = `//h5[text()='Connection & Security']`;

    //actions

    public async clickOnAccountDropdown() {
        await this.page.locator(this.account_dropdown).click();
    }

    public async clickOnLogoutButton() {
        await this.page.locator(this.logout_button).click();
    }

    public async clickOnMyAccountButton() {
        await this.page.locator(this.myAccount_button).click();
    }

    public async clickOnPaymentMethodLink() {
        await this.page.locator(this.paymentMethod_link).click();
    }

    public async clickOnAddressesLink() {
        await this.page.locator(this.Addresses_link).click();
    }

    public async clickOnConnectionAndSecurityLink() {
        await this.page.locator(this.connectionAndSecurity_link).click();
    }
    
}