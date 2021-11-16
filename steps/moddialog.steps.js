import ModDialogPage from '../pages/moddialog.page';
import testdata from '../assets/data.json'

class ModDialogSteps {

    async checkSmallModal() {
        await ModDialogPage.clickShowSmallModal()
        await ModDialogPage.smallModalShouldHaveTitle('Small Modal')
        await ModDialogPage.smallModalBodyHaveText('This is a small modal. It has very less content')
        await ModDialogPage.clickCloseSmallModal()
    }

    async checkLargeModal() {
        await ModDialogPage.clickShowLargeModal()
        await ModDialogPage.largeModalShouldHaveTitle('Large Modal')
        await ModDialogPage.largeModalBodyHaveText(testdata.largeModalBodyText)
        await ModDialogPage.clickCloseLargeModal()
    }
}

export default new ModDialogSteps();

