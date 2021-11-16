import { click, setText } from "../utils/commands";
import Page from './page';

class AlertsPage extends Page {

    get alertButton() { return $('#alertButton') }
    get timerAlertButton() { return $('#timerAlertButton') }
    get confirmAlertButton() { return $('#confirmButton') }
    get promtAlertButton() { return $('#promtButton') }
    get confirmResult(){ return $('#confirmResult')}
    get promptResult(){ return $('#promptResult')}

    async clickAlertButton() { await click(this.alertButton) }
    async clickTimerAlertButton() { await click(this.timerAlertButton) }
    async clickConfirmAlertButton() { await click(this.confirmAlertButton) }
    async clickPromtAlertButton() { await click(this.promtAlertButton) }

    open() { return super.open('alerts') }
}

export default new AlertsPage();
