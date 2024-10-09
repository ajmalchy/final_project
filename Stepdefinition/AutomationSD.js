const { Given, Then, When } = require("@wdio/cucumber-framework");
const automationLandingPage = require("../Pages/automationLandingPage");
const { expect } = require("chai");
const automationProductPage = require("../Pages/automationProductPage");
const automationSearchedProductPage = require("../Pages/automationSearchedProductPage");

Given(/^I am on Automation website$/, async function (){
    await browser.url('https://automationexercise.com/');
    await browser.pause(3000);

    // maximize window
    await browser.maximizeWindow();
    await browser.pause(1000);
})

Then(/^I verify that homepage is visible successfully$/, async function () {
    const isHomeBtnActive = await automationLandingPage.isHomeBtnOrange();

    expect(isHomeBtnActive).to.be.true;
    await browser.pause(1000);
})

When(/^I click on "([^"]*)" Button$/, async function (option) {
    await automationLandingPage.selectFromNavbar(option);

    await browser.pause(3000);
})

Then(/^I verify that ALL Product Page is visible$/, async function () {
    const isProductsBtnOrange = await automationProductPage.isProductsBtnOrange();
        expect(isProductsBtnOrange).to.be.true;
        await browser.pause(3000)


        const isAllProductsHeadingDisplayed = await automationProductPage.isAllProductsHeadingDisplayed();

        expect(isAllProductsHeadingDisplayed).to.be.true;
        await browser.pause(5000)
})

When(/^I enter product name "([^"]*)" in search input$/, async function (productName) {
        await automationProductPage.enterProductName(productName);

        await browser.pause(2000);
})

When(/^I click search button$/, async function () {
    await automationProductPage.clickSearchBtn();
    await browser.pause(2000);
})

Then(/^I verify the Searched Product is visible$/, async function () {
    const isSearchedProductDisplayed = await automationSearchedProductPage.isSearchedProductDisplayed();
    expect(isSearchedProductDisplayed).to.be.true;
})