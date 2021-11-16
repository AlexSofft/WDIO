import FramesPage from '../../pages/frames.page';
import FramesSteps from '../../steps/frames.steps';

describe('Frames', () => {
    beforeEach(() => {
        FramesPage.open()
    })

    it('should have text', async () => {
        await FramesSteps.checkFirstFrame()
        await FramesSteps.navigateToPageLevel()
        await FramesSteps.checkSecondFrame()
    });
});
