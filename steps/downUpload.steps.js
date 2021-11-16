import fs from "fs";
import path from 'path';
import { DOWNLOAD_FOLDER_PATH, UPLOAD_FOLDER_PATH } from '../constants/pathconst';
import { deleteDirectory } from '../utils/fileUtils';
import DownloadPage from "../pages/download.page";

const extensions = ['.jpg', '.txt', '.pdf', '.png', '.json', '.jpeg'];

class DownloadSteps {

    async downloadFile() {
        await DownloadPage.clickDownloadButton()
        await browser.pause(1000)
        const files = fs.readdirSync(DOWNLOAD_FOLDER_PATH);
        files.forEach(file => {
            expect(extensions).toContain(path.extname(file));
        })
        deleteDirectory(DOWNLOAD_FOLDER_PATH);
    }

    async uploadFile() {
        await DownloadPage.clickChooseFileButton()
        await DownloadPage.uploadFile(UPLOAD_FOLDER_PATH)
    }
}


export default new DownloadSteps();

