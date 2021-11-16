import { click, setText } from "../utils/commands";
import Page from './page';

class BrowsWinPage extends Page {

    get newTabButton() { return $('#tabButton') }
    get newWindowButton() { return $('#windowButton') }
    get newWindowMessageButton() { return $('#messageWindowButton') }
    get newWindowHeader() { return $('#sampleHeading') }

    async clickNewTab() { await click(this.newTabButton) }
    async clickNewWindow() { await click(this.newWindowButton) }
    async clickNewWindowMessage() { await click(this.newWindowMessageButton) }

    open() { return super.open('browser-windows') }
}

export default new BrowsWinPage();
