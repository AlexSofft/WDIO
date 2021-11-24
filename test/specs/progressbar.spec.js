import ProgressBarPage from '../../pages/progressbar.page';
import ProgressBarSteps from '../../steps/progressbar.steps';

describe('ProgressBar', () => {
    beforeEach(() => {
        ProgressBarPage.open()
    })

    it('should be totaly filled', async () => {
        await ProgressBarSteps.checkFullBar()
    });

    it('new window should contains text', async () => {
        await ProgressBarSteps.verifyReset()
    });
});