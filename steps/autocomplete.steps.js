import { setText } from "../utils/commands";
import AutocompletePage from '../pages/autocomplete.page';
const { expect } = require("chai")

class AutoCompleteSteps {

    async checkMultipleValues() {
        await AutocompletePage.setInputValue(AutocompletePage.autoCompleteMultipleInput, 'Y')
        await AutocompletePage.setInputValue(AutocompletePage.autoCompleteMultipleInput, 'W')
        let list = await AutocompletePage.multipleValuesList
        console.log(`LOGG ${(await (await list[0]).getText())}`)
        console.log(`LOGG ${(await (await list[1]).getText())}`)
        // expect('foo').to.have.lengthOf(3); // Recommended
        expect(await AutocompletePage.multipleInputValuesContainer).to.have.lengthOf.above(2) // not recommended
        await AutocompletePage.shouldHaveText(await (await list[0]), 'Yellow')
        await AutocompletePage.shouldHaveText(await (await list[1]), 'White')
        await AutocompletePage.clickdDeleteMultipleValuesButton()
        expect(await AutocompletePage.multipleInputValuesContainer).to.have.lengthOf(2)
    }

    async selectSinglValue() {
        await AutocompletePage.setInputValue(AutocompletePage.autoCompleteSingleInput, 'Y')
        console.log(`LOGG ${await AutocompletePage.singleInputValue.getText()} LOGG`)
        await AutocompletePage.shouldHaveText(await AutocompletePage.singleInputValue, 'Yellow')
    }
}

export default new AutoCompleteSteps();