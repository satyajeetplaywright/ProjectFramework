import { After, Before, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, firefox, webkit } from "@playwright/test";
setDefaultTimeout(60 * 1000);

import { CustomWorld } from "./customWorld";
import { Homepage } from "../pages/homepage";
import { Loginpage } from "../pages/loginpage";
import { Signuppage } from "../pages/signuppage";
import { Myaccountpage } from "../pages/myaccountpage";
import { Cartpage } from "../pages/cartpage";
import { Checkoutpage } from "../pages/checkoutpage";
import { Confirmationpage } from "../pages/confirmationpage";
import { Extrainfopage } from "../pages/extrainfopage";
import { Paymentpage } from "../pages/paymentpage";
import { Shoppage } from "../pages/shoppage";
import { Paymentmethodpage } from "../pages/paymentmethodpage";
import { Addressespage} from "../pages/addressespage";
import { Deliveryaddresspage } from "../pages/deliveryaddresspage";


Before({ timeout: 60000 }, async function (this: CustomWorld) {

    // change browser here
    let browserName: string = "chromium";
    // let browserName: string = "firefox";
    // let browserName: string = "webkit";


    if (browserName === "firefox") {

        this.browser = await firefox.launch({
            headless: true,
            args: ["--start-maximized"]
        });

    } else if (browserName === "webkit") {

        this.browser = await webkit.launch({
            headless: true,
            args: ["--start-maximized"]
        });

    } else {

        this.browser = await chromium.launch({
            headless: false,
            args: ["--start-maximized"]
        });

    }

    // create context
    this.context = await this.browser.newContext({
        viewport: null
    });

    // create page
    this.page = await this.context.newPage();

    // launch application
    await this.page.goto("https://ecommerceguru.odoo.com/");

    // page object classes
    this.homepage_obj = new Homepage(this.page);
    this.loginpage_obj = new Loginpage(this.page);
    this.signuppage_obj = new Signuppage(this.page);
    this.myaccountpage_obj = new Myaccountpage(this.page);
    this.cartpage_obj = new Cartpage(this.page);
    this.checkoutpage_obj = new Checkoutpage(this.page);
    this.confirmationpage_obj = new Confirmationpage(this.page);
    this.extrainfopage_obj = new Extrainfopage(this.page);
    this.paymentpage_obj = new Paymentpage(this.page);
    this.shoppage_obj = new Shoppage(this.page);
    this.paymentmethodpage_obj = new Paymentmethodpage(this.page);
    this.addressespage_obj = new Addressespage(this.page);
    this.deliveryaddresspage_obj = new Deliveryaddresspage(this.page);
});

After({ timeout: 60000 }, async function (this: CustomWorld) {
    await this.context.close();
    await this.browser.close();
});