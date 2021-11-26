import sortablePage from '../pages/sortable.page';

class SortableSteps {

    async reverseOrder() {
        await browser.maximizeWindow()
        await sortablePage.dragElementFromListByText('Six', 'One')
        await sortablePage.dragElementFromListByText('Five', 'One')
        await sortablePage.dragElementFromListByText('Four', 'One')
        await sortablePage.dragElementFromListByText('Three', 'One')
        await sortablePage.dragElementFromListByText('Two', 'One')
        await sortablePage.shouldHavePosition('Two', 5)
        await sortablePage.shouldHavePosition('Three', 4)
    }
}

export default new SortableSteps();