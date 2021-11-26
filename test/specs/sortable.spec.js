import sortablePage from '../../pages/sortable.page';
import sortableSteps from '../../steps/sortable.steps';

describe('Sortable', () => {
    beforeEach(() => {
        sortablePage.open()
    })

    it('should reverse order', async () => {
        await sortableSteps.reverseOrder()
        // await browser.pause(2000)
    });

    
});