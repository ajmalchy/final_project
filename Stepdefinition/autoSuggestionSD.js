const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const autoSuggestionCucum = require("../Pages/autoSuggestionCucum");
const { and } = require("wdio-wait-for");



Given(/^I am on hotels.com homepage$/, async function () {
    await browser.url('https://www.hotels.com/')
});

When(/^I click Going to button$/, async function () {
    await autoSuggestionCucum.clickLoginBtnLocator();
});

When(/^I write new to location field$/, async function () {
    await autoSuggestionCucum.setValueToLocationFieldLocator();
});

When(/^I select Newport Beach from autosuggestion$/, async function () {
    await autoSuggestionCucum.selectFromAutoSuggestion();
});