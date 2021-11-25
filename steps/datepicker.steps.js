import datePickerPage from '../pages/datepicker.page';

class DatePickerSteps {

    async checkMonthYearInput() {
        await datePickerPage.clickDatePickerMonthYearInput()
        browser.keys(["Control", "A", "Space"]);
        await datePickerPage.setMonthYear('01/21/2010')
        browser.keys('Enter');    
        await datePickerPage.validateDate(/^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/) // если с 0 тогда от 1 до9, а если с 1 то от 0 до 2 
    }

    async checkMonthYearTimeInput() {
        await datePickerPage.clickDatePickerMonthYearInput()
        browser.keys(["Control", "A", "Space"]);
        await datePickerPage.setMonthYear('01/21/2010')
        browser.keys('Enter');    
        await datePickerPage.validateDate(/^[A-Z][a-z]*\s[0-3]\d,\s\d{4}\s\d{2}:\d{2}\s(AM|PM)/)
    }
}

export default new DatePickerSteps();