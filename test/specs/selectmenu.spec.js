import SelectMenuPage from '../../pages/selectmenu.page';
import SelectMenuSteps from '../../steps/selectmenu.steps';

describe('Select-menu', () => {
    beforeEach(() => {
        SelectMenuPage.open()
    })

    it('fill menu fields', async () => {
        await SelectMenuSteps.fillAllDropdowns()
    });

});

