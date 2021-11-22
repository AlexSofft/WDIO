import { click } from "../utils/commands";
import Page from './page';

class MenuPage extends Page {

    get subSubMenuItem2() { return $('=Sub Sub Item 2') } //#nav > li:nth-child(2) > ul >li:nth-child(3) >ul >li:nth-child(2) a
    get menuItem2() { return $('=Main Item 2') }
    get subSubList() { return $('*=SUB SUB LIST') } // contains text


    async clickSubSubMenuItem2() { await click(this.subSubMenuItem2) }
    async clickMenuItem2() { await click(this.menuItem2) }
    async clickSubSubList() { await click(this.subSubList) }

    open() { return super.open('menu') }
}

export default new MenuPage();
