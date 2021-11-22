import AccordianPage from '../../pages/accordian.page';
import AccordianSteps from '../../steps/accordian.steps';

describe('Accordian', () => {
    beforeEach(() => {
        AccordianPage.open()
    })

    it('should contain text', async () => {
        await AccordianSteps.checkFirstSection()
        await AccordianSteps.checkSecondSection()
        await AccordianSteps.checkThirdSection()
    });
});
