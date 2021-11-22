import MenuPage from '../pages/menu.page';

class MenuSteps {

    async checkMenu() {
        await browser.maximizeWindow()
        await MenuPage.clickMenuItem2()
        await MenuPage.clickSubSubList()
        await MenuPage.shouldBeClickable(MenuPage.subSubMenuItem2)
        await MenuPage.clickSubSubMenuItem2()
    }
}

export default new MenuSteps();

