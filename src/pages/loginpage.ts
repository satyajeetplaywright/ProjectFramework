import { Page } from "@playwright/test";

export class Loginpage {

    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    //locator
    private dont_have_an_account_link = `//a[text()="Don't have an account?"]`;
    private email_textbox = `//input[@id='login']`;
    private password_textbox = `//input[@id='password']`;
    private login_button = `//button[text()='Log in']`;

    //actions
    public async clickOnDontHaveAnAccountLink() {
        await this.page.locator(this.dont_have_an_account_link).click();
    }

    public async enterEmail(email: string) {
        await this.page.locator(this.email_textbox).fill(email);
    }

    public async enterPassword(password: string) {
        await this.page.locator(this.password_textbox).fill(password);
    }

    public async clickOnLoginButton(password: string) {
        await this.page.locator(this.login_button).click();
    }

}