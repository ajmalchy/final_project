const { Given, Then } = require("@wdio/cucumber-framework");

const { expect } = require("chai");
const homePage = require("../Pages/homePage");

Given(/^I am on facebook homepage$/, async function () {
    await browser.url('/');
});

Then(/^I verify login email field is enabled$/, async function () {

expect(await homePage.isLoginEmailEnabled(), 'login email not enabled').to.be.true;
})

Then(/^I verify login password field is enabled$/, async function () {
expect(await homePage.isLoginPasswordEnabled(), 'login password not enabled').to.be.true;
})

Then(/^I verify login button is enabled$/, async function () {
expect(await homePage.isLoginBtnEnabled(), 'login button not enabled').to.be.true;
})

