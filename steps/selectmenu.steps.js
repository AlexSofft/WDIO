import SelectMenuPage from '../pages/selectmenu.page';

class SelectMenuSteps {

    async  fillAllDropdowns() {
        await browser.maximizeWindow()
        await SelectMenuPage.clickSelectValueMenu()
        await browser.keys('Group 1, option 2')
        await browser.keys('Enter')

        await SelectMenuPage.clickSelectOneMenu()
        await browser.keys('Enter')

        await SelectMenuPage.selectElementByAttrValue(SelectMenuPage.oldStyleSelectMenu, 'value', '3')

        await SelectMenuPage.clickMultiselectDropdown()
        await browser.keys('B')
        await browser.keys('Enter')
        await browser.keys('G')
        await browser.keys('Enter')

        await SelectMenuPage.selectElementByAttrValue(SelectMenuPage.standartMultiSelect, 'value', 'opel')
    }
}

export default new SelectMenuSteps();

    // assert.equal(true, InternetPage.dropDownMenuOption(1).isSelected()) //chai
