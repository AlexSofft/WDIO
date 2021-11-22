export default class Page {

    //should
    async shouldBeClickable(element) {
        expect(await element).toBeClickable()
    }

    async shouldHaveText(element, text) {
        await expect(await element).toHaveText(text)
    }

    async shouldContainText(element, text) {
        await expect(await element.getText()).toContain(text)
    }

    async shouldHaveAttrContaining(element, attr, value) {
        await expect(element).toHaveAttrContaining(`${attr}`, `${value}`)
    }

    //select
    async selectElementByAttrValue(element, attr, value) {
        await (await element).selectByAttribute(attr, value)
    }

    //waits
    async waitForClickable(element, time) {
        await browser.waitUntil(() => {
            return element.isClickable();
        }, { timeout: time, timeoutMsg: `Element is not clickable after ${time} seconds` });
    }

    async waitForDisplayed(element, time) {
        await browser.waitUntil(() => {
            return element.isDisplayed();
        }, { timeout: time, timeoutMsg: `Element is not displayed after ${time} seconds` });
    }

    open(path) {
        return browser.url(`https://demoqa.com/${path}`)
    }
}
