import BlogPage from '../pages/blog-page';
describe('Blog page', () => {
    it('Fetch recent posts list & assert the length of each post', async () => {
        await BlogPage.open();
        
        //Get the recent post list
        const recentPostsList = await BlogPage.recentPostsList;
        for (const item of recentPostsList) {
            const text = await item.getText();
            await expect(text.length).toBeGreaterThan(10);
        }
        //Assert that number of posts is 5
        await expect(recentPostsList).toHaveLength(5);
    });
});