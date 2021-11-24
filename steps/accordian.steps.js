import accordianPage from '../pages/accordian.page';

class AccordianSteps {

    async checkFirstSection() {
        await accordianPage.shouldContainText(accordianPage.firstSectionText, 'Lorem Ipsum is simply dummy text')
    }

    async checkSecondSection() {
        await accordianPage.clickFirstSection()
        await accordianPage.clickSecondSection()
        await (await accordianPage.secondSectionText).waitForDisplayed({ timeout: 3000 })
        // await AccordianPage.waitForDisplayed(AccordianPage.secondSectionText, 3000)
        await accordianPage.shouldContainText(accordianPage.secondSectionText, 'Contrary to popular belief')
    }

    async checkThirdSection() {
        await accordianPage.clickSecondSection()
        await accordianPage.clickThirdSection()
        await (await accordianPage.secondSectionText).waitForDisplayed({ timeout: 3000 })
        // await AccordianPage.waitForDisplayed(AccordianPage.thirdSectionText, 3000)
        await accordianPage.shouldContainText(accordianPage.thirdSectionText, 'It is a long established fact that')
    }
}

export default new AccordianSteps();