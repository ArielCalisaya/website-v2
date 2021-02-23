/// <reference types="cypress" />

context('DragScrollProvider', () => {
    beforeEach(() => {
      cy.visit('http://192.168.0.9:8000/').wait(3000)
      cy.get('#DragScroll-Partners').click()
    })
  
    it('Should Scroll to the Right', () => {
      cy.get('#DragScroll-Partners').scrollTo('right', { duration: 2000 })
    })
  })
  