import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../supports/customWorld";

When('user clicks on dont have account link', async function () {
    await this.loginpage_obj.clickOnDontHaveAnAccountLink();
});

When('user enters email {string}', async function (email: string) {
    await this.loginpage_obj.enterEmail(email);
});

When('user enters password {string}', async function (password: string) {
    await this.loginpage_obj.enterPassword(password);
});

When('user clicks on login button', async function () {
    await this.loginpage_obj.clickOnLoginButton();
});

Then('user landed on {string}', async function (this: CustomWorld, expectedUrl: string) {
    await this.page.waitForLoadState('networkidle');
    const actualUrl = this.page.url();
    expect(actualUrl).toContain(expectedUrl);
});