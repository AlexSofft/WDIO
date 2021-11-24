import accordianPage from '../../pages/accordian.page';
import accordianSteps from '../../steps/accordian.steps';

describe('Accordian', () => {
    beforeEach(() => {
        accordianPage.open()
    })

    it('should contain text', async () => {
        await accordianSteps.checkFirstSection()
        await accordianSteps.checkSecondSection()
        await accordianSteps.checkThirdSection()
    });
});
