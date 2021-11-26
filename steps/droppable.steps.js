import droppablePage from '../pages/droppable.page';

class DroppableSteps {

    async dragCheckColorMessage() {
        await droppablePage.dragDrop()
        await droppablePage.shouldHaveBackgroundColor(droppablePage.droppable, 'rgba(70,130,180,1)')
        await droppablePage.shouldContainText(droppablePage.droppable, 'Dropped!')
    }
}

export default new DroppableSteps();