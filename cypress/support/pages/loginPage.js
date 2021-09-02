// linea de autocompletar ayuda
/// <reference types="Cypress" />

class LoginPage{

    // VIsitar Url Café
    visitURLCoffe(){
        cy.visit('http://thomasburleson.github.io/angularJS-CafeTownsend/#/login')
    }

    //Metodo Login
    loginAngular(user,pass){
        cy.get("input[title='Enter your email as your username ;']").type(user)
        cy.get("input[type='password']").type(pass)
        cy.get("button[class='main-button login']").click()
    }

    // Método inicio correcto
    assertLogin(validation){
        cy.get("[class='main-button logout']").should('contain', validation)
    }
}

export default LoginPage