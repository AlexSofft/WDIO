import FramesPage from '../pages/frames.page';

class FramesSteps {

    async checkFirstFrame() {
        await browser.switchToFrame(await FramesPage.firsFrame)
        await FramesPage.shouldHaveText(FramesPage.frameHeader, 'This is a sample page')
    }

    async checkSecondFrame() {
        await browser.switchToFrame(await FramesPage.secondFrame)
        await FramesPage.shouldHaveText(FramesPage.frameHeader, 'This is a sample page')
    }

    async navigateToPageLevel() {
        // navigate to page level
        await browser.switchToFrame(null)
    }
}

export default new FramesSteps();

