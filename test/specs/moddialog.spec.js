import modDialogPage from '../../pages/moddialog.page';
import modDialogSteps from '../../steps/moddialog.steps';

describe('Modal dialogs', () => {
    beforeEach(() => {
        modDialogPage.open()
    })

    it('should check small modal', async () => {
        await modDialogSteps.checkSmallModal()
    });

    it('should check large modal', async () => {
        await modDialogSteps.checkLargeModal()
    });
});
