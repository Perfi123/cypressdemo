describe('testingreadAndWrite',()=>{
    it('testing write',()=>{
    cy.writeFile('sample.txt','Hello world!\n')
    cy.writeFile('sample.txt','Thank you!',{flag:'a+'})
    cy.writeFile('samplej.json',{name:'coderscamp',email:'coderscampindia@gmail.com'})
       })
   
    it('read testing',()=>{
    cy.readFile('sample.txt').then(function(value){
    cy.log(value)
           })
    cy.readFile('samplej.json').then(function(temp){
    cy.log(temp.name)
    cy.log(temp.email)
           })
   
       })
   })