class Losschakergame
{

gamepageverify()
{
    cy.get('.page').should('be.visible')
}
clickToRestart()
{
    cy.get('a:contains("Restart")').click()
}
clicktomovepiece(location){
    return cy.get(`[name="space${location}"]`)
}
PositionToMovePiece(location){
   return cy.get(`[name="space${location}"]`)
}

PlayChakerGame()
{
    //---------Loss a Chaker Game using Array-----------/

    const moves = [
        { from: '02', to: '13' },
        { from: '42', to: '33' },
        { from: '33', to: '24' },
        { from: '62', to: '53' },
        { from: '53', to: '44' },
        { from: '44', to: '35' },
        { from: '22', to: '04' },
        { from: '04', to: '15' },
        { from: '71', to: '62' },
        { from: '51', to: '62' },
        { from: '31', to: '22' },
        { from: '22', to: '13' },
        { from: '11', to: '22' },
        { from: '00', to: '11' },
        { from: '13', to: '24' },
        { from: '24', to: '35' },
        { from: '20', to: '31' },
        { from: '40', to: '31' },
        { from: '22', to: '33' },
        { from: '31', to: '22' },
        { from: '22', to: '13' },
        { from: '60', to: '51' },
        { from: '13', to: '24' },
        { from: '24', to: '35' },
        { from: '35', to: '46' }
    ];
    
    // Cypress commands refactored using a loop
    this.gamepageverify();
    this.clickToRestart();
    
    moves.forEach(({ from, to }) => {
        this.clicktomovepiece(from).click();
        this.PositionToMovePiece(to).click().wait(1200);
    });
    
    cy.get('[id="message"]').should('be.visible')


     //----------Loss a Chaker Game using functions------------//

/*
    this.gamepageverify()
    this.clickToRestart()
    this.clicktomovepiece('02').click()
    this.PositionToMovePiece('13').click().wait(2000)
    this.clicktomovepiece('42').click()
    this.PositionToMovePiece('33').click().wait(2000)
    this.clicktomovepiece('33').click()
    this.PositionToMovePiece('24').click().wait(2000)
    this.clicktomovepiece('62').click()
    this.PositionToMovePiece('53').click().wait(2000)
    this.clicktomovepiece('53').click()
    this.PositionToMovePiece('44').click().wait(2000)
    this.clicktomovepiece('44').click()
    this.PositionToMovePiece('35').click().wait(2000)
    this.clicktomovepiece('22').click()
    this.PositionToMovePiece('04').click().wait(2000)
    this.clicktomovepiece('04').click()
    this.PositionToMovePiece('15').click().wait(2000)
    this.clicktomovepiece('71').click()
    this.PositionToMovePiece('62').click().wait(2000)
    this.clicktomovepiece('51').click()
    this.PositionToMovePiece('62').click().wait(2000)
    this.clicktomovepiece('31').click()
    this.PositionToMovePiece('22').click().wait(2000)
    this.clicktomovepiece('22').click()
    this.PositionToMovePiece('13').click().wait(2000)
    this.clicktomovepiece('11').click()
    this.PositionToMovePiece('22').click().wait(2000)
    this.clicktomovepiece('00').click()
    this.PositionToMovePiece('11').click().wait(2000)
    this.clicktomovepiece('13').click()
    this.PositionToMovePiece('24').click().wait(2000)
    this.clicktomovepiece('24').click()
    this.PositionToMovePiece('35').click().wait(2000)
    this.clicktomovepiece('20').click()
    this.PositionToMovePiece('31').click().wait(2000)
    this.clicktomovepiece('40').click()
    this.PositionToMovePiece('31').click().wait(2000)
    this.clicktomovepiece('22').click()
    this.PositionToMovePiece('33').click().wait(2000)
    this.clicktomovepiece('31').click()
    this.PositionToMovePiece('22').click().wait(2000)
    this.clicktomovepiece('22').click()
    this.PositionToMovePiece('13').click().wait(2000)
    this.clicktomovepiece('60').click()
    this.PositionToMovePiece('51').click().wait(2000)
    this.clicktomovepiece('13').click()
    this.PositionToMovePiece('24').click().wait(2000)
    this.clicktomovepiece('24').click()
    this.PositionToMovePiece('35').click().wait(2000)
    this.clicktomovepiece('35').click()
    this.PositionToMovePiece('46').click().wait(2000)

    cy.get('[id="message"]').should('be.visible')

*/

}
}

export default Losschakergame;