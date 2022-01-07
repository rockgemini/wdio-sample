import HomePage from '../pages/home-page';
import allureReporter from '@wdio/allure-reporter';
describe('Home', () =>{
    before(async ()=>{
        console.log("This is run once before running tests");
        await HomePage.open();
    });
    beforeEach(async ()=>{
        console.log("This is run once before each test");
        await HomePage.open();
    });
    after(async ()=>{
        console.log("This is run once after running all tests");
        
    });
    afterEach(async ()=>{
        console.log("This is run once after each test");
        
    });
    it('Open URL & assert title', async () =>{
        allureReporter.addSeverity("minor");
        //Open URL
        // await HomePage.open();
        //Assert title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');
    });
    it('Open About page & assert URL', async () =>{
        //Open About page
        await browser.url('https://practice.automationbro.com/about');
        //Verify About URL
        await expect(browser).toHaveUrl('https://practice.automationbro.com/about/');
    });
    it('Click Get Started button & assert URL contains get started text', async () =>{
        //Open Home page
        // await HomePage.open();
        //Click Get Started button
        await HomePage.btnGetStarted.click();
        //Assert URL contains get started text
        await expect(browser).toHaveUrlContaining('get-started');
    });
    it('Click Logo & assert URL doesn\'t contain get started text', async () =>{
        allureReporter.addFeature("Logo Verification");
        //Open Home page
        // await HomePage.open();
        //Click on logo
        await HomePage.imageLogo.click();
        //Assert URL doesn't contain get started text
        await expect(browser).not.toHaveUrlContaining('get-started');
    });
    it('Find heading element & assert the text', async () =>{
        //Identify the element
        const headingEl = await HomePage.textHeading;
        //Get the text
        const headingText = await headingEl.getText();
        //Assert the text
        await expect(headingText).toEqual('Think different. Make different.');
        await expect(headingEl).toHaveText('Think different. Make different.');
    });
});