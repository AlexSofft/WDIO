import { click } from "../utils/commands";
import Page from './page';

class AccordianPage extends Page {

    get firstSection() { return $('#section1Heading') }
    get secondSection() { return $('#section2Heading') }
    get thirdSection() { return $('#section3Heading') }
    get firstSectionText() { return $('#section1Content p') }
    get secondSectionText(){ return $('#section2Content p')}
    get thirdSectionText(){ return $('#section3Content p')}

    async clickFirstSection() { await click(this.firstSection) }
    async clickSecondSection() { await click(this.secondSection) }
    async clickThirdSection() { await click(this.thirdSection) }

    open() { return super.open('accordian') }
}

export default new AccordianPage();
