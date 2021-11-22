import AccordianPage from '../pages/accordian.page';

class AccordianSteps {

    async checkFirstSection() {
        await AccordianPage.shouldContainText(AccordianPage.firstSectionText, 'Lorem Ipsum is simply dummy text')
    }

    async checkSecondSection() {
        await AccordianPage.clickFirstSection()
        await AccordianPage.clickSecondSection()
        await AccordianPage.waitForDisplayed(AccordianPage.secondSectionText, 3000)
        await AccordianPage.shouldContainText(AccordianPage.secondSectionText, 'Contrary to popular belief')
    }

    async checkThirdSection() {
        await AccordianPage.clickSecondSection()
        await AccordianPage.clickThirdSection()
        await AccordianPage.waitForDisplayed(AccordianPage.thirdSectionText, 3000)
        await AccordianPage.shouldContainText(AccordianPage.thirdSectionText, 'It is a long established fact that')
    }
}

export default new AccordianSteps();