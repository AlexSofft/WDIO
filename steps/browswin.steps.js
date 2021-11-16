import BrowsWinPage from '../pages/browswin.page';

class BrowsWinSteps {

    async checkNewTab() {
        await BrowsWinPage.clickNewTab()
        await browser.switchWindow('https://demoqa.com/sample')
        await BrowsWinPage.shouldContainText(BrowsWinPage.newWindowHeader, 'This is a sample page')    }

    async checkNewWindow() {
        await BrowsWinPage.clickNewWindow()
        await browser.switchWindow('https://demoqa.com/sample')
        await BrowsWinPage.shouldContainText(BrowsWinPage.newWindowHeader, 'This is a sample page')
    }

    async checkNewWindowMessage() {
        await BrowsWinPage.clickNewWindowMessage()
        await browser.switchWindow('about:blank')
        await expect(await $('body')).toContain('This is a sample page')

    }

}

export default new BrowsWinSteps();

