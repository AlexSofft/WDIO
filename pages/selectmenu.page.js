import { click, setText } from "../utils/commands";
import Page from './page';

class SelectMenuPage extends Page {

    get selctValueSelect() { return $('#withOptGroup > div') }//#react-select-2-input
    get selectOneSelect() { return $('#selectOne > div') }//#react-select-3-input
    get oldStyleSelectMenu() { return $('#oldSelectMenu') }
    get multiselectDropdown() { return $('//input[@id="react-select-4-input"]/../../../..') }
    get standartMultiSelect() { return $('#cars') }

    
    async clickSelectValueMenu() { await click(this.selctValueSelect) }
    async clickSelectOneMenu() { await click(this.selectOneSelect) }
    async clickMultiselectDropdown() {
        await this.multiselectDropdown.scrollIntoView(); 
        await click(this.multiselectDropdown) }

    open() { return super.open('select-menu') }
}

export default new SelectMenuPage();
