import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

When('user enters name {string} and email {string}', async function (username: string, email: string) {
    await this.signuppage_obj.enterUsername(username);
    await this.signuppage_obj.enterEmailAddress(email);
});

When('user enters password {string} and confirm password {string}', async function (password: string, confirm_password: string) {
    await this.signuppage_obj.enterPassword(password);
    await this.signuppage_obj.enterConfirmPassword(confirm_password);
});

When('user clicks on signup button', async function () {
    await this.signuppage_obj.clickOnSignupButton();
});

Then('verify account created',async function () {
    var actual_result = await this.page.title();
    var expected_result = "My Portal | ecommerceguru";

    expect(actual_result).toEqual(expected_result);
});

Then('verify user gets text as {string}',async function (expected_text: string) {
    var actual_text = await this.signuppage_obj.getErrorMessage();
    expect(actual_text).toEqual(expected_text);
});

Then('Then user should see validation error for required fields', function () {
    
});
