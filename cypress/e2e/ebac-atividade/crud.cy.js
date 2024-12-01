/// <reference types="cypress" />

describe('Deve testar o CRUD do site', () => {
    beforeEach(()=>{
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve testar a inclusão indevida', () => {
        cy.get('.adicionar').click()
        cy.get('.sc-beqWaB').should('have.length', 3)
    })
    
    it('Deve testar a inclusão', () => {
        cy.get('input[type="text"]').type('Vitor')
        cy.get('input[type="email"]').type('Vitor@gmail.com') 
        cy.get('input[type="tel"]').type('11 9 12344321') 
        cy.get('.adicionar').click()
        cy.get('.sc-beqWaB').should('have.length', 4)
        
    })
    it('Deve testar a exclusão', () => {
        cy.get('button.delete').first().click()
        cy.get('.sc-beqWaB').should('have.length', 3)
        
    })
    it('Deve testar a alteração', () => {
        cy.get('button.edit').first().click()
        cy.get('input[type="tel"]').clear()
        cy.get('input[type="tel"]').type('11 9 11111111') 
        cy.get('button.alterar').click()

        cy.get('.sc-beqWaB li').contains('11 9 11111111')
        
    })
})