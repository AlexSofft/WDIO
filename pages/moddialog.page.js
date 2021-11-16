import { click } from "../utils/commands";
import Page from './page';

class ModDialogPage extends Page {

    get showSmallModal() { return $('#showSmallModal') }
    get showLargeModal() { return $('#showLargeModal') }
    get smallModalTitle() { return $('.modal-title.h4') }
    get smallModalBody() { return $('.modal-body') }
    get largeModalTitle() { return $('.modal-title.h4') }
    get largeModalBody() { return $('.modal-body') }
    get closeSmallModal() { return $('#closeSmallModal') }
    get closeLargeModal() { return $('#closeLargeModal') }

    async clickShowSmallModal() { await click(this.showSmallModal) }
    async clickShowLargeModal() { await click(this.showLargeModal) }
    async clickCloseSmallModal() { await click(this.closeSmallModal) }
    async clickCloseLargeModal() { await click(this.closeLargeModal) }

    async smallModalShouldHaveTitle(title) { await this.shouldHaveText(this.smallModalTitle, title) }
    async smallModalBodyHaveText(body) { await this.shouldHaveText(this.smallModalBody, body) }

    async largeModalShouldHaveTitle(title) { await this.shouldHaveText(this.largeModalTitle, title) }
    async largeModalBodyHaveText(body) { await this.shouldHaveText(this.largeModalBody, body) }

    open() { return super.open('modal-dialogs') }
}

export default new ModDialogPage();
