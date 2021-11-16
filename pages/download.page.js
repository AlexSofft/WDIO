import { click, setText } from "../utils/commands";
import Page from './page';

class DownloadPage extends Page {

    get downloadButton() { return $('#downloadButton') }
    get uploadFileInput() { return $("#uploadFile") }
    get button() { return $('for="uploadFile"]') }

    async clickDownloadButton() { await click(this.downloadButton) }
    async uploadFile(myPath) {
        await click(this.button)
        await setText(this.uploadFileInput, myPath)
    }

    open() {
        return super.open('upload-download');
    }
}

export default new DownloadPage();
