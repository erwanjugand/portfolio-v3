// describe('Header', () => {
//   beforeEach(() => {
//     cy.visit('/en')
//   })

//   it('should switch theme, click on button', () => {
//     cy.get('html').should('have.class', 'light-mode') // System
//     cy.get('.header-toggle-theme').click()
//     cy.get('html').should('have.class', 'light-mode') // Light
//     cy.get('.header-toggle-theme').click()
//     cy.get('html').should('have.class', 'dark-mode') // Dark
//     cy.get('.header-toggle-theme').click()
//     cy.get('html').should('have.class', 'light-mode') // System
//   })

//   it('should switch the language, click on button', () => {
//     cy.wait(750).get('.header-switch-locale').click()
//     cy.get('.header-switch-locale-list-link').first().click()
//     cy.get('html').should('have.attr', 'lang', 'fr')
//     cy.get('.introduction-cv').contains('Afficher le CV')
//   })
// })
