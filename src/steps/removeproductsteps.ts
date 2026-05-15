import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../supports/customWorld";

When('user clicks on remove link', async function() {
    await this.cartpage_obj.clickOnRemoveLink();
});

Then('user user is able to see message {string}',async function(this: CustomWorld, expectedText: string, ) {
    await this.page.waitForLoadState('networkidle');
    let actualText = await this.cartpage_obj.getEmptyCartText();
    await expect(actualText).toContain(expectedText);
});