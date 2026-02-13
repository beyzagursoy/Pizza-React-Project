/// <reference types="cypress" />

describe('Pizza Sipariş Uygulaması', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5174/')
  
    cy.contains('ACIKTIM').click()
    cy.get('[data-cy="name-input"]').should('exist')
  })

  it('İsim alanına metin girilebiliyor mu?', () => {
    cy.get('[data-cy="name-input"]')
      .type('Ali Veli')
      .should('have.value', 'Ali Veli')
  })

  it('En az 4 malzeme seçilebiliyor ve checkboxlar çalışıyor', () => {
    const malzemeler = ['Mısır', 'Sosis', 'Biber', 'Ananas']

    malzemeler.forEach((m) => {
      cy.get(`[data-cy="ingredient-checkbox"][name="${m}"]`)
        .check({ force: true })
        .should('be.checked')
    })

    cy.get('[data-cy="ingredient-checkbox"]:checked')
      .should('have.length', malzemeler.length)
  })

  it('Boyut seçilebiliyor', () => {
    cy.get('[data-cy="size-radio"][value="M"]')
      .check({ force: true })
      .should('be.checked')
  })

  it('Hamur tipi seçilebiliyor', () => {
    cy.get('[data-cy="dough-select"]')
      .select('Standart')
      .should('have.value', 'Standart')
  })

  it('Form başarıyla gönderilip success sayfasına gidiyor', () => {
    cy.get('[data-cy="name-input"]').type('Ayşe Yılmaz')
    cy.get('[data-cy="size-radio"][value="M"]').check({ force: true })
    cy.get('[data-cy="dough-select"]').select('Standart')

    const malzemeler = ['Mısır', 'Sosis', 'Biber', 'Ananas']
    malzemeler.forEach((m) => {
      cy.get(`[data-cy="ingredient-checkbox"][name="${m}"]`)
        .check({ force: true })
        .should('be.checked')
    })

    cy.get('[data-cy="submit-button"]')
      .should('not.be.disabled')
      .click()

    cy.contains('SİPARİŞ ALINDI').should('exist')
    cy.contains('Position Absolute Acı Pizza').should('exist')
  })
})
