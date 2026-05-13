import { After, Given, Then, When } from "@cucumber/cucumber";
import { Browser, chromium, expect, Page } from "@playwright/test";
import { after } from "node:test";
import { Context } from "node:vm";
import { Homepage } from "../pages/homepage";
import { Loginpage } from "../pages/loginpage";
import { Signuppage } from "../pages/signuppage";

// var browser: Browser;
// var context: Context;
// var page: Page;

// var homepage_obj: Homepage;
// var loginpage_obj: Loginpage;
// var signuppage_obj: Signuppage;

// Given('user lauches browser and url', async function () {
//     browser = await chromium.launch({ headless: false, args: ["--start-maximized"] });
//     context = await browser.newContext({ viewport: null });
//     page = await context.newPage();
//     await page.goto('https://ecommerceguru.odoo.com/');

//     homepage_obj = new Homepage(page);
//     loginpage_obj = new Loginpage(page);
//     signuppage_obj = new Signuppage(page);
// });

// When('user clicks on signin button', async function () {
//     await homepage_obj.clickOnSignInLink();
// });

// When('user clicks on dont have account link', async function () {
//     await loginpage_obj.clickOnDontHaveAnAccountLink();
// });

// When('user enters name {string} and email {string}', async function (username: string, email: string) {
//     await signuppage_obj.enterUsername(username);
//     await signuppage_obj.enterEmailAddress(email);
// });

// When('user enters password {string} and confirm password {string}', async function (password: string, confirm_password: string) {
//     await signuppage_obj.enterPassword(password);
//     await signuppage_obj.enterConfirmPassword(confirm_password);
// });

// When('user clicks on signup button', async function () {
//     await signuppage_obj.clickOnSignupButton();
// });

// Then('verify account created',async function () {
//     var actual_result = await page.title();
//     var expected_result = "My Portal | ecommerceguru";

//     expect(actual_result).toEqual(expected_result);
// });

// Then('verify user gets text as {string}',async function (expected_text: string) {
//     var actual_text = await signuppage_obj.getErrorMessage();
//     expect(actual_text).toEqual(expected_text);
// });

// Then('Then user should see validation error for required fields', function () {
    
// });

// After(async function () {
//     await context.close();
//     await browser.close();
// }
// )