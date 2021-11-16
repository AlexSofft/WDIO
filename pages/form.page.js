import { click, setText } from "../utils/commands";
import Page from './page';

class FormPage extends Page {

    get firstNameField() { return $('#firstName') }
    get lastNameField() { return $('#lastName') }
    get femaleGenderRadio() { return $('[for="gender-radio-2"]') }
    get userNumberField() { return $('#userNumber') }
    get subjectsField() { return $('.subjects-auto-complete__input input') }
    get currentAddress() { return $('#currentAddress') }
    get selectState() { return $('#react-select-3-input') }
    get selectCity() { return $('#react-select-4-input') }
    get sbmtBtn() { return $('#submit') }
    get uploadFileInput() { return $("#uploadPicture") }
   
    readingCheckbox(hobby) {
        return $(`//label[normalize-space()="${hobby}"]`)
    }

    async enterFirstName(fname) { await setText(this.firstNameField, fname) }
    async enterLastName(lname) { await setText(this.lastNameField, lname) }
    async enterUserNumber(number) { await setText(this.userNumberField, number) }
    async enterSubject(subject) { await setText(this.subjectsField, subject) }
    async enterAddress(address) { await setText(this.currentAddress, address) }
    async uploadPicture(path) { await setText(this.uploadFileInput, path) }


    async setState(state) { 
        await setText(this.selectState, state) 
        await browser.keys('Enter')
    }

    async setCity(city) {
        await setText(this.selectCity, city)
        await browser.keys('Enter')
    }

    async clickFemaleGender() { await click(this.femaleGenderRadio) }
    async clickReadingCheckBox() { await click(this.readingCheckbox('Reading')) }
    async clickSbmtBtn() { await click(this.sbmtBtn) }

    open() { return super.open('automation-practice-form') }
}

export default new FormPage();
