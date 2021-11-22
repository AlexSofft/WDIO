import AutocompletePage from '../../pages/autocomplete.page';
import AutoCompleteSteps from '../../steps/autocomplete.steps';

describe('AutoComplete', () => {
    beforeEach(() => {
        AutocompletePage.open()
    })

    it('should add several values and delete them', async () => {
        await AutoCompleteSteps.checkMultipleValues()
    });

    it('shoiuld add single value', async () => {
        await AutoCompleteSteps.selectSinglValue()
    });
});