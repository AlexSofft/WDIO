import modDialogPage from '../pages/moddialog.page';
import testdata from '../assets/modal-data.json'

class ModDialogSteps {

    async checkSmallModal() {
        await modDialogPage.clickShowSmallModal()
        await modDialogPage.smallModalShouldHaveTitle(testdata.smallModal)
        await modDialogPage.smallModalBodyHaveText(testdata.smallModalBodyText)
        await modDialogPage.clickCloseSmallModal()
    }

    async checkLargeModal() {
        await modDialogPage.clickShowLargeModal()
        await modDialogPage.largeModalShouldHaveTitle(testdata.lar)
        await modDialogPage.largeModalBodyHaveText(testdata.largeModalBodyText)
        await modDialogPage.clickCloseLargeModal()
    }
}

export default new ModDialogSteps();

