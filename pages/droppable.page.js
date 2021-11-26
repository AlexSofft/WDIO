import { click } from "../utils/commands";
import Page from './page';

class DroppablePage extends Page {

    get draggable() { return $('.simple-drop-container #draggable') }
    get droppable() { return $('.simple-drop-container #droppable') }

    async dragDrop() { await this.draggable.dragAndDrop(await this.droppable) }

    open() { return super.open('droppable') }
}

export default new DroppablePage();
