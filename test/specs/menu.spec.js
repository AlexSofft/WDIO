import MenuPage from '../../pages/menu.page';
import MenuSteps from '../../steps/menu.steps';

describe('Menu', () => {
    beforeEach(() => {
        MenuPage.open()
    })

    it('new tab should contains text', async () => {
        await MenuSteps.checkMenu()
    });
  
});