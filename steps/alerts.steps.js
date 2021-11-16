import AlertsPage from '../pages/alerts.page';

class AlertsSteps {

    async checkAlert() {
        await AlertsPage.clickAlertButtonclick()
        let alert = await browser.getAlertText();
        console.log(`LOG ${alert}`)
        await browser.acceptAlert()
        await expect(alert).toEqual('You clicked a button');
    }

    async checkTimerAlert() {
        await AlertsPage.clickTimerAlertButton()
        await browser.waitUntil(
            async () => (await browser.getAlertText()) === 'This alert appeared after 5 seconds',
            { timeout: 6000 })
        let alert = await browser.getAlertText();
        await browser.acceptAlert()
        await expect(alert).toEqual('This alert appeared after 5 seconds');
    }

    async checkConfirmAlert() {
        await AlertsPage.clickConfirmAlertButton()
        await browser.acceptAlert()
        await AlertsPage.shouldHaveText(AlertsPage.confirmResult, 'You selected Ok')
    }

    async checkPromptAlert() {
        await AlertsPage.clickPromtAlertButton()
        const text = 'test';
        await browser.sendAlertText(text)
        await browser.acceptAlert()
        await AlertsPage.shouldHaveText(AlertsPage.promptResult, `You entered ${text}`)
    }
}

export default new AlertsSteps();