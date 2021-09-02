// linea de autocompletar ayuda
/// <reference types="Cypress" />

class ActionsPage{
   
    // Metodo add user
    addUser(){
        cy.get('#bAdd').click()
    }

    // Metodo complete form
    completeForm(firstname,lastname,email){
        cy.get("input[type='text']").eq(0).type(firstname)
        cy.get("input[type='text']").eq(1).type(lastname)
        cy.get("input[class='ng-pristine ng-invalid ng-invalid-required ng-valid-email']").type(email)
        cy.get("button[type='submit']").click()
    }
    // Metodo para validar registro
    assertRegistre(validation){
        cy.get("[class='ng-scope ng-binding']").should('be.visible', validation)
    }

    // Metodo edit registre
    editRegistre(fisrtnamenew,date){
        cy.get("[class='ng-scope ng-binding']").contains("Misko").dblclick()
        cy.get("input[type='text']").eq(0).clear().type(fisrtnamenew)
        cy.get("input[title='Please enter a date formatting MM/DD/YYYY']").type(date)
        cy.get("button[type='submit']").click()
    }

    // Metodo delete registre
    deleteRegistre(){
        cy.get("[class='ng-scope ng-binding']").contains("Francisco").click()
        cy.get('#bDelete').click()
    }

    // Metodo para validar delete registre
    assertDeleteRegistre(validation){
        cy.get("[class='ng-scope ng-binding']").should('not.contain.text', validation)
    }  
}

export default ActionsPage
