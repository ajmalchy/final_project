class autoSuggestion {
    // locators of home page

    locationBtnLocator = '//button[@data-stid="destination_form_field-menu-trigger"]';

    locationFieldLocator = '#destination_form_field';

    allSuggestionsLocator = '//div[@class="truncate"]//strong';
    // functions to interact with elements on home page
    async clickLoginBtnLocator(){
        await $(this.locationBtnLocator).click();
    }

    async setValueToLocationFieldLocator() {
        await $(this.locationFieldLocator).setValue('new');
    }
    async selectFromAutoSuggestion(){
        const allSuggestions = await $$(this.allSuggestionsLocator);

        for (const suggestion of allSuggestions) {
            const suggestionText = await suggestion.getAttribute("aria-label");
            if (suggestionText.startsWith('Newport Beach')) {
                await suggestion.click();
                break;
            }
        }
    }

}

module.exports = new autoSuggestion;