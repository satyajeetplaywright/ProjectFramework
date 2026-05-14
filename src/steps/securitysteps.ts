import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../supports/customWorld";

When('user clicks on connection and security link', async function() {
    await this.myaccountpage_obj.clickOnConnectionAndSecurityLink();
});

When('user enters current password {string}', async function(currentpassword: string) {
    await this.securitypage_obj.enterCurrentPassord(currentpassword);
});

When('user enters new password {string}', async function(newpassword:string) {
    await this.securitypage_obj.enterNewPassord(newpassword);
});

When('user enters verify new password {string}',async function(verifynewpassword:string) {
    await this.securitypage_obj.enterVerifyNewPassord(verifynewpassword);
});

When('user clicks on change password button', async function() {
    await this.securitypage_obj.clickOnChangePasswordButton();
});

Then('user is able to see the message {string}',async function(expectedpasswordUpdatedText: string) {
    await this.page.waitForLoadState('networkidle');
    let actualText = await this.securitypage_obj.getPasswordUpdatedText();
    await expect(actualText).toContain(expectedpasswordUpdatedText);
});