/// <reference types="cypress" />

context('Home Page', () => {
    it('The path Home must be "/"', () => {
      cy.visit('http://192.168.0.9:8000/').wait(10000)

      cy.location().should((location) => {
        expect(location.pathname).to.eq('/')
      })
    })

    it('Shoud open and close the "CHOOSE PROGRAM" section', () => {

        cy.get('button').contains('CHOOSE PROGRAM').click()
    })
    
    // The scroll function can be called to 9 specific positions of an element:
    //  -----------------------------------
    // | topLeft        top       topRight |
    // |                                   |
    // |                                   |
    // | left          center        right |
    // |                                   |
    // |                                   |
    // | bottomLeft   bottom   bottomRight |
    //  -----------------------------------

    it('Should Scroll "Testimonials" to the Right', () => {
        cy.get('#DragScroll-Testimonials').wait(3000)
        cy.get('#DragScroll-Testimonials').scrollTo('right')
    })
    
    it('Should Scroll "OurPartners" to the Right, then to the center', () => {
        cy.get('#DragScroll-Partners').wait(3000)
        cy.get('#DragScroll-Partners').scrollTo('right')
        cy.get('#DragScroll-Partners').scrollTo('center')
      })
  })
  