class AutomationSearchedProductPage {
    // locators
    productImgLocator = '//img[@src="/get_product_picture/5"]'; 

    // functions
    async isSearchedProductDisplayed() {
        const productImgElement = await $(this.productImgLocator);
        return productImgElement.isDisplayed();
    }
       
}

module.exports = new AutomationSearchedProductPage;
