import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../supports/customWorld";

When('user cliks on my Account button', async function() {
    await this.myaccountpage_obj.clickOnMyAccountButton();
});

When('user clicks on payment Method link', async function() {
    await this.myaccountpage_obj.clickOnPaymentMethodLink();
});

When('user add payment details {string}', async function(paymentdata:string) {
    await this.paymentmethodpage_obj.enterPaymentDetails(paymentdata);
}); 

When('user clicks on save button', async function() {
    await this.paymentmethodpage_obj.clickOnSaveButton();
});

Then('user is able to see the payment details on payment details page {string}', async function(expectedpaymentdetails: string) {
    await this.page.waitForLoadState('networkidle');
    let actualPaymentDetails = await this.paymentmethodpage_obj.getPaymentDataText();
    await expect(actualPaymentDetails).toContain(expectedpaymentdetails);
});