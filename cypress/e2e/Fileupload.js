import fileuploadLinks from '../pageObjects/fileuploadLinks'

describe('upload the file', function()
{

    it('upload the file and assert name of the file',function(){
        const filepath = 'logo.png';
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile(filepath);
        cy.get("#file-submit").click();
        cy.get("#uploaded-files").contains("logo.png")

    });

});