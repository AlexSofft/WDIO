import datePickerPage from '../../pages/datepicker.page';
import datePickerSteps from '../../steps/datepicker.steps';

describe('DatePicker', () => {
    beforeEach(() => {
        datePickerPage.open()
    })

    it('should set date', async () => {
        await datePickerSteps.checkMonthYearInput()
    });

    it('should set date and time', async () => {
        await datePickerSteps.checkMonthYearTimeInput()
    });
});