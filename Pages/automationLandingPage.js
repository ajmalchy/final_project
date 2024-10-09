class AutomationLandingPage {

    // locators
    homeBtnLocator = '//a[@style="color: orange;" and text()=" Home"]';

    signupBtnLocator = '//a[@href="/login"]';

    contactUsBtnLocator = '//a[@href="/contact_us"]';

    productsBtnLocator = '//a[@href="/products"]';
    // functions

    async isHomeBtnOrange() {
        const homeBtn = await $(this.homeBtnLocator);
        const homeBtnColor = await homeBtn.getAttribute("style");
        if(homeBtnColor.includes("color: orange;")){
            return true;
        }
        else {
            return false;
        }
    }
    async selectFromNavbar(option) {
        switch (option) {
            case "Signup / Login":
                await $(this.signupBtnLocator).click();
                break;
            case "Contact Us":
                await $(this.contactUsBtnLocator).click();
                break;
            case "Products":
                await $(this.productsBtnLocator).click();
                break;
        
            default:
                break;
        }
    }
}

module.exports = new AutomationLandingPage;