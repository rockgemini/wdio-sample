const path = require('path');

describe('Upload Tests', () => {
    it('Simple upload test', async () => {
        //Open URL
        await browser.url('https://the-internet.herokuapp.com/upload');
        //Store test file path
        console.log(__dirname);//C:\Users\Kanisha\Downloads\Practice\Projects\wdio-course\test\specs
        const filePath = path.join(__dirname, '../data/catalina_oil_rig.jpg');
        //Upload test file to browser
        const remoteFilePath = await browser.uploadFile(filePath);
        //Set file path to the input field in the site
        await $('#file-upload').setValue(remoteFilePath);
        //Click Upload button
        await $('#file-submit').click();
        //Assert the succes message
        await expect($('h3')).toHaveText('File Uploaded!');

    });
    it('Upload on a hidden input field', async () => {
        //Open URL
        await browser.url('/cart');
        //Store test file path
        console.log(__dirname);//C:\Users\Kanisha\Downloads\Practice\Projects\wdio-course\test\specs
        const filePath = path.join(__dirname, '../data/catalina_oil_rig.jpg');
        //Upload test file to browser
        const remFilePath = await browser.uploadFile(filePath);
        //Remove hidden classname from upload selector
        await browser.execute("document.querySelector('#upfile_1').className=''");
        //Set file path to the input field in the site
        await $('#upfile_1').setValue(remFilePath);
        //await $('input[type=file]').setValue(remFilePath);

        //Click Upload button
        await $('.file_input_submit').click();
        //Assert the succes message
        await expect($('#wfu_messageblock_header_1_label_1')).toHaveTextContaining('uploaded successfully');
    });
});