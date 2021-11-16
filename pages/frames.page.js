import { click, setText } from "../utils/commands";
import Page from './page';

class FramesPage extends Page {

    get firsFrame() { return $('#frame1') }
    get secondFrame() { return $('#frame2') }
    get frameHeader() { return $('#sampleHeading') }

    open() { return super.open('frames') }
}

export default new FramesPage();
