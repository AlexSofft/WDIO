import AlertsPage from '../../pages/alerts.page';
import AlertsSteps from '../../steps/alerts.steps';

describe('Alerts', () => {
    beforeEach(() => {
        AlertsPage.open()
    })

    it('should fill and submit form', async () => {
        await AlertsSteps.checkAlert()
        await AlertsSteps.checkTimerAlert()
        await AlertsSteps.checkConfirmAlert()
        await AlertsSteps.checkPromptAlert()
    });
});
