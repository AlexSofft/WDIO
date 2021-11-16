import BrowsWinPage from '../../pages/browswin.page';
import BrowsWinSteps from '../../steps/browswin.steps';

describe('Browser Windows', () => {
    beforeEach(() => {
        BrowsWinPage.open()
    })

    it('new tab should contains text', async () => {
        await BrowsWinSteps.checkNewTab()
    });

    it('new window should contains text', async () => {
        await BrowsWinSteps.checkNewWindow()
    });

});