class Signuppage {

    fnameLocator = 'input[name=firstname]';
    lNameLocator = 'input[name=lastname]';
    mobileOrEmailLocator = 'input[name=reg_email__]';
    newPwdLocator = '#password_step_input';

    birthMonthLocator = '#month';
    birthDayLocator = '#day';
    birthYearLocator = '#year';

    femaleGenderLocator = '//label[text()="Female"]/following-sibling::input';
    maleGenderLocator = '//label[text()="Male"]/following-sibling::input';
    CustomGenderLocator = '//label[text()="Custom"]/following-sibling::input';
    signupBtnLocator = 'button[name=websubmit]';

    async enterFirstName(fname){
        await $(this.fNameLocator).setValue(fname);
    }
    async enterLastName(lname){
        await $(this.lNameLocator).setValue(lname);
    }

    async enterMobileOrPhone(mobileOrPhone){
        await $(this.mobileOrEmailLocator).setValue(mobileOrPhone);
    }
    async selectBirthMonth(monthAbbr){
        const monthDropdown = await $(this.birthMonthLocator);
        await monthDropdown.selectByVisibleText(monthAbbr);
    }
    async selectBirthDay(day){
        const dayDropDown = await $(this.birthDayLocator);
        await dayDropDown.selectByVisibleText(day);
    }
    async selectBirthYear(year){
        const yearDropDown = await $(this.birthYearLocator);
        await yearDropDown.selectByVisibleText(year);
    }
    async selectFemaleGender(){
        await $(this.femaleGenderLocator).click();
    }
    async selectMaleGender(){
        await $(this.maleGenderLocator).click();
    }

    async selectCustomGender(){
        await $(this.customGenderLocator).click();
    }

    async clickSighUpBtn(){
        await $(this.signupBtnLocator).click();
    } 

}

module.exports = new Signuppage();