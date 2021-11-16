export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
     async shouldHaveText(element, text) {
        await expect(await element).toHaveText(text)
    }

    async shouldContainText(element, text) {
        await expect(await element.getText()).toContain(text)
    }

    open (path) {
        return browser.url(`https://demoqa.com/${path}`)
    }

   
}
