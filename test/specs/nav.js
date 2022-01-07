import HomePage from '../pages/home-page';
import allureReporter from '@wdio/allure-reporter';
describe('Navigation Menu', () => {
    it('Get the text of all menu items & assert them', async () => {
        allureReporter.addFeature("Navigation");
        allureReporter.addSeverity("critical");
        await HomePage.open();
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
    ];
        await browser.waitUntil(async function(){
            const homeText = await HomePage.NavComponent.firstNavMenuList.getText();
            return homeText === "Home";
        }, {
            timeout: 5000,
            timeoutMsg: "Could not verify Home text from '#primary-menu li' element"
        });
        const actualLinks = [];
        const navLinks = await HomePage.NavComponent.linksNavMenu;
        for(const link of navLinks){
            actualLinks.push(await link.getText());
        }
        await expect(actualLinks).toEqual(expectedLinks);

    });
});