// linea de autocompletar ayuda
/// <reference types="Cypress" />

import LoginPage from '../../support/pages/loginPage'
import ActionsPage from '../../support/pages/actionsPage'

describe('Test Automation Falabella', ()=>{

    const login = new LoginPage
    const actions = new ActionsPage

    before(function(){
        cy.fixture("data").then((DATA)=>{

            globalThis.DATA=DATA
        })
    })  

    it('Test Falabella',()=>{

            login.visitURLCoffe()
            login.loginAngular(DATA.user,DATA.pass)
            login.assertLogin(DATA.assertLogin)
            actions.addUser()
            actions.completeForm(DATA.firstName,DATA.lastName,DATA.email)
            actions.assertRegistre(DATA.assertRegistre)
            actions.editRegistre(DATA.user,DATA.fecha)
            actions.deleteRegistre()
            actions.assertDeleteRegistre()

        })
})