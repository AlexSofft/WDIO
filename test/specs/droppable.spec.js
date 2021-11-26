import droppablePage from '../../pages/droppable.page';
import droppableSteps from '../../steps/droppable.steps';

describe('Droppable', () => {
    beforeEach(() => {
        droppablePage.open()
    })

    it('should be draged and dropped', async () => {
        await droppableSteps.dragCheckColorMessage()
    });

});