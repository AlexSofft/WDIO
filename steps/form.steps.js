import FormPage from "../pages/form.page";
import { UPLOAD_PICTURE_PATH } from "../constants/pathconst";

class FormSteps {

    async fillForm() {
        browser.maximizeWindow()
        await FormPage.enterFirstName('Alex')
        await FormPage.enterLastName('Soft')
        await FormPage.clickFemaleGender()
        await FormPage.enterUserNumber('12345')
        await this.pickDate()
        await FormPage.enterSubject('subject')
        await FormPage.clickReadingCheckBox()
        await FormPage.enterAddress('address')
        await FormPage.setState('Haryana')
        await FormPage.setCity('Panipat')
        await FormPage.clickSbmtBtn()
        await FormPage.uploadPicture(UPLOAD_PICTURE_PATH)
    }

    //draft for myself
    async pickDate() {
        browser.execute("document.getElementById('dateOfBirthInput').setAttribute('value','02/08/2017')")
        await browser.execute("document.getElementById('dateOfBirthInput').removeAttribute('readonly')");
        let startDateBox = await $('#dateOfBirthInput')
        await startDateBox.click();
        await startDateBox.clearValue();
        await browser.keys('Enter')
        await startDateBox.setValue("02/08/2017");
    }
}

export default new FormSteps();

