import ProgressBarPage from '../pages/progressbar.page';

class ProgressBarSteps {

    async checkFullBar() {
        await ProgressBarPage.clickStartStopButton()
        await ProgressBarPage.waitForElemAttrEqVal(await ProgressBarPage.progressBar, 'aria-valuenow', '100', 11000)
        await ProgressBarPage.shouldHaveAttrContaining(await ProgressBarPage.progressBar, 'aria-valuenow', '100')
    }

    async verifyReset() {
        await ProgressBarPage.clickStartStopButton()
        await ProgressBarPage.clickStartStopButton()
        await ProgressBarPage.shouldHaveAttrContaining(await ProgressBarPage.progressBar, 'class', 'progress-bar bg-info')
    }
}

export default new ProgressBarSteps();