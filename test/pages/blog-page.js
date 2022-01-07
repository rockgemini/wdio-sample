class BlogPage {
    open(){
        return browser.url('/blog');
    }

    get recentPostsList() {
        return $$("(//section[@class='widget widget_recent_entries']/ul)[1]/li/a");
    }
    
}
export default new BlogPage();