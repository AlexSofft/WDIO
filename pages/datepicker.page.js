import { click, setText } from "../utils/commands";
import Page from './page';
const { expect } = require("chai")

class DatePickerPage extends Page {

  get datePickerMonthYearInput() { return $('#datePickerMonthYearInput') }
  get dateAndTimePickerInput() { return $('#dateAndTimePickerInput') }

  async clickDatePickerMonthYearInput() { await click(this.datePickerMonthYearInput) }
  async clickDateAndTimePickerInput() { await click(this.dateAndTimePickerInput) }

  async setMonthYear(date) { await setText(this.datePickerMonthYearInput, date) }

  //chai
  async validateDate(regex) {
    expect(await (await this.datePickerMonthYearInput).getValue()).to.match(regex)
  }

  open() { return super.open('date-picker') }
}

export default new DatePickerPage();


