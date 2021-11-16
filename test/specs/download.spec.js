import DownloadPage from '../../pages/download.page';
import DownloadSteps from '../../steps/downUpload.steps'

describe('Download-upload file', () => {
    beforeEach(() => {
        DownloadPage.open()
    })

    it('should download file', async () => {
        await DownloadSteps.downloadFile()
    });

    it('should upload file', async () => {
        DownloadSteps.uploadFile()
    });
});


