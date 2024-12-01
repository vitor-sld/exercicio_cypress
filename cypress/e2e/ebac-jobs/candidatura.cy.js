/// <reference types="cypress" />

describe('Testes para a página de candidatura', () => {
    beforeEach(()=> {
    cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it('Deve levar o usuário até o formulário', () => {
        
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length',7)

    })

    it('Deve preencher o formulário de inscrição', () => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/vagas/1')
        cy.get('input[name="nome-completo"]').type('Vitor Augusto')
        cy.get('input[name="email"]').type('Vitor@gmail.com')
        cy.get('input[name="telefone"]').type('11912344567')
        cy.get('input[name="endereco"]').type('Rua abc 123')
        cy.get('input[value="linux"]').check()
        cy.get('select[name="escolaridade"]').select('outros')
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })
    })

})
// dando enter no campo: cy.get('.FormVagas_campo__E1ppF').type('fullstack{enter}')
