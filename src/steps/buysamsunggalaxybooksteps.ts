import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../supports/customWorld";

When('user clicks on Shop link', async function () {
    await this.homepage_obj.clickOnShopLink();
});

When('user clicks on add to cart button of Samsung Galaxy Book5 Pro 14', async function () {
    await this.shoppage_obj.clickOnSamsungGalaxyBookOfAddToCartButton();
});

When('user clicks on viewcart button', async function () {
    await this.shoppage_obj.clickOnCartButton();
});

When('user clicks on checkout button', async function () {
    await this.cartpage_obj.clickOnCheckoutButton();
});

When('user clicks on confirm button', async function () {
    await this.checkoutpage_obj.clickOnConfirmButton();
});

When('user clicks on confirm button from extra info page', async function () {
    await this.extrainfopage_obj.clickOnConfirmButton();
});

When('user clicks on I agree to the terms & conditions checkbox', async function() {
    await this.paymentpage_obj.clickOnIagreeCheckBox();
});

When('user clicks on Pay now button', async function() {
    await this.paymentpage_obj.clickOnPayNowButton();
});

When('user clicks on skip now link', async function() {
    await this.paymentpage_obj.clickOnSkipNowButton();
});

Then('user able to see the message {string}',async function(expectedString: string) {
    let actualString = await this.confirmationpage_obj.getThankYouText();
    await expect(expectedString).toBe(actualString);
});



