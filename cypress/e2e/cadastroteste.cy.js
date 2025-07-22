/*global cy,describe, it, */

describe('Testa o cadastro de um usuário', () => {
  it('Faz o cadastro de um novo usuário com  sucesso', () => {
    cy.visit('http://localhost:5173')
    const nome = "Nayara"
    const email = `nayaracypress${Math.floor(Math.random() * 100)}@teste.com`
    const senha = "12334"

    cy.get('input[type="text"]').type(nome)
    cy.get('input[type="email"]').type(email)
    cy.get('input[type="password"]').type(senha)

    cy.get('button[type="submit"]').click()

    cy.contains(`Usuário ${nome} cadastrado com sucesso`).should('be.visible')
  })
  it("Faz o cadastro de um usuário já cadastrado", () => {
    cy.visit('http://localhost:5173')

    cy.get('input[type="text"]').type("Nayara")
    cy.get('input[type="email"]').type("nayaracypress@teste.com")
    cy.get('input[type="password"]').type("1234")

    cy.get('button[type="submit"]').click()

    cy.contains(`Email já cadastrado`).should('be.visible')

  })
})