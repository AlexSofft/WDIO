import DatePickerPage from '../../pages/datepicker.page';
import DatePickerSteps from '../../steps/datepicker.steps';

describe('DatePicker', () => {
    beforeEach(() => {
        DatePickerPage.open()
    })

    it('should set date', async () => {
        await DatePickerSteps.checkMonthYearInput()
    });
});