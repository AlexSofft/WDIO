import ModDialogPage from '../../pages/moddialog.page';
import ModDialogSteps from '../../steps/moddialog.steps';

describe('Modal dialogs', () => {
    beforeEach(() => {
        ModDialogPage.open()
    })

    it('should check small modal', async () => {
        await ModDialogSteps.checkSmallModal()
    });

    it('should check large modal', async () => {
        await ModDialogSteps.checkLargeModal()
    });
});
