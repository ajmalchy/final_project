const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");

const { and } = require("wdio-wait-for");
const homePageHotels = require("../Pages/homePageHotels");
const signinPageHotels = require("../Pages/signinPageHotels");



Given(/^I am on hotels.com homepage$/, async function () {
    await browser.url('https://www.hotels.com/')
});

When(/^I click sign in link$/, async function () {
    await homePageHotels.clickSigninLinkLocator();
});

When(/^I click sign in button$/, async function () {
    await homePageHotels.clickSigninButtonLocator();
});

When(/^I enter <signinEmail> as login email$/, async function () {
    await signinPageHotels.setValueOnSigninEmailField(signinEmail);
});

When(/^I click continue button$/, async function () {
    await signinPageHotels.clickContinueButton();
});

Then(/^I verify signin error message is displayed$/, async function () {
    await signinPageHotels.invalidEmailErrorIsDisplayed();
});

When(/^I click on Travelers$/, async function () {
    await homePageHotels.clickTravelersButton();
});
When(/^I select "Children" as 2$/, async function () {
    await homePageHotels.clickChildrenBtnPlus();
    await homePageHotels.clickChildrenBtnPlus();
});
Then(/^I verify Children-age dropdown are 2$/, async function () {
    expect(await homePageHotels.countChildDropdowns(), 'Children-age dropdown are 2 are not true').to.equal(2);
});
Then(/^I verify Plus-button is enabled$/, async function () {
    expect(await homePageHotels.isPlusBtnEnabled(), 'Plus btn not enabled').to.be.true;
});


When(/^I select "Children" as 6$/, async function () {
    await homePageHotels.clickChildrenBtnPlus();
    await homePageHotels.clickChildrenBtnPlus();
    await homePageHotels.clickChildrenBtnPlus();
    await homePageHotels.clickChildrenBtnPlus();
    await homePageHotels.clickChildrenBtnPlus();
    await homePageHotels.clickChildrenBtnPlus();
});

Then(/^I verify Children-age dropdown are 6$/, async function () {
    expect(await homePageHotels.countChildDropdowns(), 'Children-age dropdown are 2 are not true').to.equal(6);
});
Then(/^I verify Plus-button is disabled$/, async function () {
    expect(await homePageHotels.isPlusBtnEnabled(), 'Plus btn enabled').to.be.false;
});
Then(/^I verify minus-button is enabled$/, async function () {
    expect(await homePageHotels.isMinusBtnEnabled(), 'Minus btn not enabled').to.be.true;
});
When(/^I select "Children" as 5$/, async function () {
    await homePageHotels.clickChildrenBtnMinus();
    
});
Then(/^I verify Children-age dropdown are 5$/, async function () {
    expect(await homePageHotels.countChildDropdowns(), 'Children-age dropdown are 2 are not true').to.equal(5);
});



When(/^I select "Children" as 0$/, async function () {
    await homePageHotels.clickChildrenBtnMinus();
    clickChildrenBtnMinus();
    clickChildrenBtnMinus();
    clickChildrenBtnMinus();
    clickChildrenBtnMinus();
    
});

Then(/^I verify Plus button is disabled$/, async function () {
    expect(await homePageHotels.isPlusBtnEnabled(), 'Plus btn enabled').to.be.false;
});

Then(/^I verify minus-button is disabled$/, async function () {
    expect(await homePageHotels.isMinusBtnEnabled(), 'Minus btn enabled').to.be.false;
});

Then(/^I verify Children-age dropdown is NOT displayed$/, async function () {

    expect(await homePageHotels.isChildrenAgeDropdownDisplayed(), 'Children-age dropdown is displayed').to.be.false;
    })