class Loginpage {
    // locators of login page
    loginErrorLocator = '//div[contains(text(), "connected to an account")]';

    // functions to interact with elements on login page
    async isLoginErrorDisplayed(){
        await $(this.loginErrorLocator).waitForDisplayed();
        return await $(this.loginErrorLocator).isDisplayed();

    }

}

module.exports = new Loginpage;