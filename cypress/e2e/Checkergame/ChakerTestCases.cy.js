describe('Chaker Game', () => {
    const ChakerUrl = ('https://www.gamesforthebrain.com/game/checkers/');
    
    beforeEach(() => {
      cy.visit(ChakerUrl);
    });

  it('Chaker Game page loaded successfully', () => {

      cy.title().should('eq' , 'Checkers - Games for the Brain')
      cy.get('.content').should('be.visible');
      cy.get('[name="space02"]').click()
      cy.get('[name="space13"]').click().wait(2000)
      cy.get('[name="space11"]').click()
      cy.get('[name="space02"]').click().wait(2000)
      cy.get('[name="space00"]').click()
      cy.get('[name="space11"]').click().wait(2000)
      cy.get('[name="space42"]').click()
      cy.get('[name="space24"]').click().wait(2000)
      cy.get('[name="space31"]').click()
      cy.get('[name="space42"]').click().wait(2000)
      cy.get('[name="space42"]').click()
      cy.get('[name="space53"]').click().wait(2000)
      cy.get('[name="space22"]').click()
      cy.get('[name="space44"]').click().wait(2000)
      cy.get('[name="space24"]').click()
      cy.get('[name="space35"]').click().wait(2000)
      cy.get('[name="space13"]').click()
      cy.get('[name="space35"]').click().wait(2000)
      cy.get('[name="space11"]').click()
      cy.get('[name="space22"]').click().wait(2000)
      cy.get('[name="space20"]').click()
      cy.get('[name="space11"]').click().wait(2000)
      cy.get('[name="space40"]').click()
      cy.get('[name="space31"]').click().wait(2000)
      cy.get('[name="space22"]').click()
      cy.get('[name="space13"]').click().wait(2000)
      cy.get('[name="space13"]').click()
      cy.get('[name="space04"]').click().wait(2000)
      cy.get('[name="space35"]').click()
      cy.get('[name="space26"]').click().wait(2000)
      cy.get('[name="space26"]').click()
      cy.get('[name="space17"]').click().wait(2000)
      cy.get('[name="space04"]').click()
      cy.get('[name="space26"]').click().wait(2000)
      cy.get('[name="space31"]').click()
      cy.get('[name="space42"]').click().wait(2000)
      cy.get('[name="space26"]').click()
      cy.get('[name="space37"]').click().wait(2000)
      cy.get('[name="space37"]').click()
      cy.get('[name="space46"]').click().wait(2000)
      cy.get('[name="space02"]').click()
      cy.get('[name="space24"]').click().wait(2000)
      cy.get('[name="space11"]').click()
      cy.get('[name="space33"]').click().wait(2000)
      cy.get('[id="message"]').should('be.visible')
  })

})
