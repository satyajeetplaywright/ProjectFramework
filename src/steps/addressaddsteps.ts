import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../supports/customWorld";

When('user clicks on Addresses link', async function () {
    await this.myaccountpage_obj.clickOnAddressesLink();
});

When('user clicks on add address button', async function() {
    await this.addressespage_obj.clickOnAddAddressButton();
});

When('user enters name as {string}, email as {string}, phone as {string}', 
    async function(name: string, email: string, phone: string) {
        await this.deliveryaddresspage_obj.enterYourName(name);
        await this.deliveryaddresspage_obj.enterEmail(email);
        await this.deliveryaddresspage_obj.enterPhone(phone);
});

When('user enters street as {string}, city as {string}, zip code as {string}', 
    async function(street: string, city: string, zipcode: string) {
        await this.deliveryaddresspage_obj.enterStreetName(street);
        await this.deliveryaddresspage_obj.enterCity(city);
        await this.deliveryaddresspage_obj.enterZipcode(zipcode);
});

When('user clicks on save address button', async function() {
    await this.deliveryaddresspage_obj.clickOnSaveAddressButton();
});

Then('user is able to see {string} and {string} in added address',async function(expectedstring1: string, expectedstring2: string) {
    await this.page.waitForLoadState('networkidle');
    let actualaddress = await this.addressespage_obj.getNewAddressText();
    await expect(actualaddress).toContain(expectedstring1);
    await expect(actualaddress).toContain(expectedstring2);
});

