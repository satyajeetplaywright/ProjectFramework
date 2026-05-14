import { IWorldOptions, setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "@playwright/test";

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
import { Addressespage } from "../pages/addressespage";
import { Deliveryaddresspage } from "../pages/deliveryaddresspage";
import { Securitypage } from "../pages/securitypage";

export class CustomWorld extends World {

    browser!: Browser;
    context!: BrowserContext;
    page!: Page;

    // pom classes
    homepage_obj!: Homepage;
    loginpage_obj!: Loginpage;
    signuppage_obj!: Signuppage;
    myaccountpage_obj!: Myaccountpage;
    cartpage_obj!: Cartpage;
    checkoutpage_obj!: Checkoutpage;
    confirmationpage_obj!: Confirmationpage;
    extrainfopage_obj!: Extrainfopage;
    paymentpage_obj!: Paymentpage;
    shoppage_obj!: Shoppage;
    paymentmethodpage_obj!: Paymentmethodpage;
    addressespage_obj!: Addressespage;
    deliveryaddresspage_obj!: Deliveryaddresspage;
    securitypage_obj!: Securitypage;

    constructor(options: IWorldOptions) {
        super(options);
    }
}

setWorldConstructor(CustomWorld);