import DatePickerPage from '../pages/datepicker.page';

class DatePickerSteps {

    async checkMonthYearInput() {
        await DatePickerPage.clickDatePickerMonthYearInput()
        browser.keys(["Control", "A", "Space"]);
        await DatePickerPage.setMonthYear('01/21/2010')
        browser.keys('Enter');    
        await DatePickerPage.validateDate(/^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/)
    }
}

export default new DatePickerSteps();