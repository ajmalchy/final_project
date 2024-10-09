class AutomationProductPage {
    // locators
    productsBtnLocator = '//a[@href="/products"]';
    allProductsHeadingLocator = '//h2[text()="All Products"]';

    allProductLocators = '//div[@class="product-image-wrapper"]';

    viewProductLocatorStarts = '//a[@href="/product_details/';
    viewProductLocatorEnds = '"]';

    searchProductFieldLocator = '#search_product';
    searchProductBtnLocator = '#submit_search';
    // functions
    async isProductsBtnOrange() {
        const productsBtn = await $(this.productsBtnLocator);
        const productsBtnColor = await productsBtn.getAttribute("style");
        return productsBtnColor.includes("color: orange;");
    }

    async isAllProductsHeadingDisplayed(){
        const headingElement = await $(this.allProductsHeadingLocator);

        const isDisplayed = await headingElement.isDisplayed();

        if(isDisplayed) {
            const headingTxt = await headingElement.getText();
            return headingTxt.includes("ALL PRODUCTS");
        }
        return false;
    }

    async enterProductName(productName) {
        const searchProductFieldElement = await $(this.searchProductFieldLocator);
        await searchProductFieldElement.setValue(productName);
        // await $(this.searchProductBtnLocator).click();
    }

    async clickSearchBtn() {
        await $(this.searchProductBtnLocator).click();
    }

}

module.exports = new AutomationProductPage;