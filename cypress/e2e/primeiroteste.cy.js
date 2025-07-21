/*global cy, describe, it */

describe('Teste inicial', () => {
  it('Deve pesquisar por Cypress no Duck Duck Go', () => {
    cy.visit('https://www.duckduckgo.com/');
    cy.get('input[name="q"]').type('cypress{enter}')
    cy.contains('https://www.cypress.io').should('exist').invoke('removeAttr', 'target').click()

    cy.origin('https://www.cypress.io', () => {
      cy.get('body').then(($body) => {
        const cookieButton = $body.find('button:contains("Aceitar")');
        if (cookieButton) {
          cy.contains('button', 'Aceitar').click({ force: true })
        }
      })
      cy.contains('nav a', 'Docs').trigger('mouseover');
      cy.contains('Documentation').should('be.visible')
    })

  })
})