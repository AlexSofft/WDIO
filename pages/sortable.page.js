import { click } from "../utils/commands";
import Page from './page';

class SortablePage extends Page {

    get elementsList() { return $$('#demo-tabpane-list div div') }

    async dragElementFromListByText(value, target) {
        const menuItems = {};
        await this.elementsList.forEach(async element => {
            menuItems[await element.getText()] = element;
        });
        menuItems[value].dragAndDrop(menuItems[target])
    }

    async shouldHavePosition(value, position) {
        const menuItems = {};
        await this.elementsList.forEach(async (element, i) => {
            menuItems[await element.getText()] = i + 1;
        });
        console.log(`LOGG ${menuItems['Six']}`)
        await expect(menuItems[value]).toEqual(position)
    }

    open() { return super.open('sortable') }
}

export default new SortablePage();
