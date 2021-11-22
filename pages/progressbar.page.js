import { click, setText } from "../utils/commands";
import Page from './page';

class ProgressBarPage extends Page {

    get startStopButton() { return $('#startStopButton') }
    get progressBar() { return $('[role="progressbar"]') }

    async clickStartStopButton() { await click(this.startStopButton) }

    open() { return super.open('progress-bar') }
}

export default new ProgressBarPage();
