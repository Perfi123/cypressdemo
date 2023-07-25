const neatCsv = require('neat-csv');
const neatCSV = require('neat-csv')

describe('readwrite the csv file', function()
{
let table;
    before(() => {
        cy.fixture('mycsv.csv').then(neatCsv)
        .then(data =>{table = data;
        })
        .then(console.table)

    });

    it('read write the csv file',function(){
        
        cy.visit('https://practice.automationbro.com/contact');
        cy.get('#evf-277-field_ys0GeZISRs-1').type(table[0]['name'])
        cy.get('#evf-277-field_LbH5NxasXM-2').type(table[0]['email'])
        cy.get('#evf-277-field_66FR384cge-3').type(table[0]['phone'])
        cy.get('#evf-277-field_yhGx3FOwr2-4').type(table[0]['message'])


        });
    });

