import FormPage from '../../pages/form.page';
import FormSteps from '../../steps/form.steps'

describe('should fill and submit form', () => {
    beforeEach(() => {
        FormPage.open()
    })

    it('should fill and submit form', async () => {
        await FormSteps.fillForm()
        await browser.pause(3000)
    });
});


