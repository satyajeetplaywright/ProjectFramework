import { Given, When } from "@cucumber/cucumber";
import { CustomWorld } from "../supports/customWorld";

Given('user lauches browser and url', async function () {
    
});

When('user clicks on signin button', async function () {
    await this.homepage_obj.clickOnSignInLink();
});