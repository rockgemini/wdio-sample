import ContactPage from '../pages/contact-page';
import * as faker from 'faker';
describe('Contact Page', () => {
    it('Fill the Contact form, submit form & assert the success message', async () => {
        await ContactPage.open();
        //Fill out the input fields
        //await ContactPage.submitForm('Prem','abc@xyz.com','8675745634','Sample Text');
        await ContactPage.submitForm(faker.name.findName(),faker.internet.email(),faker.phone.phoneNumber(),faker.lorem.paragraphs(2));
        const successAlert = await ContactPage.alertSuccess;
        const expectedMessage = "Thank you for contacting us! We will be in touch with you shortly";
        //Assert the success message
        await expect(successAlert).toHaveTextContaining(expectedMessage);
    });
});