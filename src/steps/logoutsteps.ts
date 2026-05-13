import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../supports/customWorld";

When('user click on accountDropdown', async function () {
    await this.myaccountpage_obj.clickOnAccountDropdown();
});

When('user clicks on logout button', async function () {
    await this.myaccountpage_obj.clickOnLogoutButton();
});

