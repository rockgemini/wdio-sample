class ContactPage {
    open(){
        return browser.url('/contact');
    }
    get contactName (){
        return $('#evf-277-field_ys0GeZISRs-1');
    }
    get contactEmail() {
        return $('#evf-277-field_LbH5NxasXM-2');
    }
    get contactPhone() {
        return $('#evf-277-field_66FR384cge-3');
    }
    get contactMessage() {
        return $('#evf-277-field_yhGx3FOwr2-4');
    }
    get submitButton() {
        return $('button[type=submit]');
    }
    get alertSuccess() {
        return $("//div[@role='alert']");
    }
    async submitForm(name, email, phone, message){
        await this.contactName.addValue(name);
        await this.contactEmail.setValue(email);
        await this.contactPhone.setValue(phone);
        await this.contactMessage.setValue(message);
        await this.submitButton.click();
    }
}
export default new ContactPage();