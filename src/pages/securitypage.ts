import { Page } from "@playwright/test";

export class Securitypage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // locators

    private currentpassword_textbox = `//input[@id='current']`;
    private newpassword_textbox = `//input[@id='new']`;
    private verifynewpassword_textbox = `//input[@id='new2']`;
    private changepassword_button = `//button[text()='Change Password']`;
    private passwordupdated_text = `//div[contains(text(),'Password Updated!')]`;

    // actions

    public async enterCurrentPassord(currentpassword: string) {
        await this.page.locator(this.currentpassword_textbox).fill(currentpassword);
    }

    public async enterNewPassord(newpassword: string) {
        await this.page.locator(this.newpassword_textbox).fill(newpassword);
    }

    public async enterVerifyNewPassord(verifynewpassword: string) {
        await this.page.locator(this.verifynewpassword_textbox).fill(verifynewpassword);
    }

    public async clickOnChangePasswordButton() {
        await this.page.locator(this.changepassword_button).click();
    }

    public async getPasswordUpdatedText() {
        let passwordUpdatedText = await this.page.locator(this.passwordupdated_text).textContent();
        return passwordUpdatedText;
    }
}