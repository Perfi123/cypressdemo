class fileuploadLinks {
    uploadlink() {
       
        return cy.visit('https://the-internet.herokuapp.com/upload')
     }
    businesstab() {
       return cy.get('.Toggle__Option-sc-1pryher-2:nth-child(3)')
    }
 
 }
 export default fileuploadLinks