class Homepage {
    // locators of elements on Homepage
    signinLinkLocator = '//button[text()="Sign in"]';
    signinButtonLocator = '//a[@data-stid="link-header-account-signup"]/preceding-sibling::a';
    travelersButtonLocator = '//button[@data-stid="open-room-picker"]'
    childrenBtnPlusLocator = '//input[@id="traveler_selector_children_step_input-0"]/following-sibling::button';
    childrenBtnMinusLocator = '//input[@id="traveler_selector_children_step_input-0"]/preceding-sibling::button';
    child1AgeDropdownLocator = '//select[@id="age-traveler_selector_children_age_selector-0-0"]';
    child2AgeDropdownLocator = '//select[@id="age-traveler_selector_children_age_selector-0-1"]';
    child3AgeDropdownLocator = '//select[@id="age-traveler_selector_children_age_selector-0-2"]';
    child4AgeDropdownLocator = '//select[@id="age-traveler_selector_children_age_selector-0-3"]';
    child5AgeDropdownLocator = '//select[@id="age-traveler_selector_children_age_selector-0-4"]';
    child6AgeDropdownLocator = '//select[@id="age-traveler_selector_children_age_selector-0-5"]';
    allChildDropdownLocators = '//select[@class="uitk-field-select"]';
    // functions to interact with the elements on homepage
    async clickSigninLinkLocator(){
        await $(this.signinLinkLocator).click()
        await browser.pause(1000);
    }

    async clickSigninButtonLocator(){
        await $(this.clickSigninButtonLocator).click();
        await browser.pause(1000);
    }
    async clickTravelersButton(){
        await $(this.travelersButtonLocator).click();
    }
    async clickChildrenBtnPlus(){
        await $(this.childrenBtnPlusLocator).click();
    }
    async clickChildrenBtnMinus(){
        await $(this.childrenBtnMinusLocator).click();   
    } 
    async countChildDropdowns(){
        const allDropdowns =  await $$(this.allChildDropdownLocators);  
        return await allDropdowns.length; 
    } 
    async isPlusBtnEnabled(){
        return await  $(this.childrenBtnPlusLocator).isEnabled();
    }
    async isMinusBtnEnabled(){
        return await  $(this.childrenBtnMinusLocator).isEnabled();
    }
    async isChildrenAgeDropdownDisplayed(){
        await $(this.child1AgeDropdownLocator).waitForDisplayed();
        return await $(this.child1AgeDropdownLocator).isDisplayed();

    }
}
module.exports = new Homepage;