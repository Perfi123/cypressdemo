import Login from '../pageObjects/reactLogin'

describe('Login', function () {
    const login = new Login()
    //Cypress.Cookies.preserveOnce('session_id', 'remember_token')

before(function () {
        cy.fixture('testdata').then(function (data) {
          this.data = data;
        })
      })

it('Sign in', function () {
        cy.visit('https://react-redux.realworld.io/#/login')
        login.email().type(this.data.username)
        login.password().type(this.data.password)
        login.signInButton().should('be.visible').click()
    })
})