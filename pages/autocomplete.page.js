import { click, setText } from "../utils/commands";
import Page from './page';

class AutocompletePage extends Page {

    get autoCompleteMultipleInput() { return $('#autoCompleteMultipleInput') }
    get autoCompleteSingleInput() { return $('#autoCompleteSingleInput') }
    get multipleInputValuesContainer() { return $$('#autoCompleteMultipleContainer > div > div:first-child > div') }
    get multipleValuesList() { return $$('.auto-complete__multi-value__label') }
    get singleInputValue() { return $('.auto-complete__single-value ') }
    get deleteMultipleValuesButton() { return $('.auto-complete__indicators.css-1wy0on6') }

    async clickdDeleteMultipleValuesButton() { await click(this.deleteMultipleValuesButton) }

    async setInputValue(element, value) { 
        await setText(element, value)
        await browser.pause(1000)
        await browser.keys('Enter')
     }

    open() { return super.open('auto-complete') }
}

export default new AutocompletePage();
