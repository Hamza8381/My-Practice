class chakergame
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
    this.gamepageverify()
    this.clickToRestart()

    //---------Win a Chaker Game using Array-----------/
    
const movement =[
    {from: '02' , to: '13',  Kill: ''   ,       opponentMove: '24' },
    {from: '11' , to: '02' , Kill: ''   ,       opponentMove: '44'},
    {from: '00' , to: '11' , Kill: ''   ,       opponentMove: '33'},
    {from: '42' , to: '24' , Kill: '33' ,       opponentMove: '64'},
    {from: '31' , to: '42' , Kill: ''   ,       opponentMove: '73' },
    {from: '42' , to: '53' , Kill: ''   ,       opponentMove: '33' },
    {from: '22' , to: '44' , Kill: '33' ,       opponentMove: '15'},
    {from: '24' , to: '35' , Kill: '35' ,       opponentMove: '24'},
    {from: '13' , to: '35' , Kill: '24' ,       opponentMove: '24'},

    {from: '11' , to: '22',  Kill: ''     ,       opponentMove: '33'},
    {from: '20' , to: '11',  Kill: ''     ,       opponentMove: '15'},
    {from: '40' , to: '31',  Kill: ''     ,       opponentMove: '24'},
    {from: '22' , to: '13',  Kill: ''     ,       opponentMove: '06'},
    {from: '13' , to: '04',  Kill: ''     ,       opponentMove: '46'},
    {from: '35' , to: '26',  Kill: ''     ,       opponentMove: '15'},
    {from: '26' , to: '17',  Kill: ''     ,       opponentMove: '55'},
    {from: '04' , to: '26',  Kill: '15'   ,       opponentMove: '64'},
    {from: '31' , to: '42',  Kill: ''     ,       opponentMove: '46'},
    {from: '26' , to: '37',  Kill: ''     ,       opponentMove: '55'},
    {from: '37' , to: '46',  Kill: ''     ,       opponentMove: '13'},
    {from: '02' , to: '24',  Kill: '13'   ,       opponentMove: '22'},
    {from: '11' , to: '33',  Kill: '22'   ,       opponentMove: '55'},

]

movement.forEach(({from , to  , Kill , opponentMove})=>{
    this.clicktomovepiece(from).click();
    this.PositionToMovePiece(to).click();
        cy.get(`[src="me1.gif"][name="space${Kill}"]`).should('not.exist')
        cy.get(`[src="me1.gif"][name="space${opponentMove}"]`).should('exist')

        // if(cy.get(`[src="me1.gif"][name="space${opponentMove}"]`).should('not.exist'))
        // {
        // }
        
})
        cy.get('[id="message"]').should('have.text' , 'You have won!')


     //----------Win a Chaker Game using functions & Assertions------------//

/*
    this.clicktomovepiece('02').click()
    this.PositionToMovePiece('13').click()
    cy.get('[src="me1.gif"][name="space24"]').should('exist')

    this.clicktomovepiece('11').click()
    this.PositionToMovePiece('02').click()
    cy.get('[src="me1.gif"][name="space44"]').should('exist')

    this.clicktomovepiece('00').click()
    this.PositionToMovePiece('11').click()
    cy.get('[src="me1.gif"][name="space33"]').should('exist')

    this.clicktomovepiece('42').click()
    this.PositionToMovePiece('24').click()
    cy.get('[src="me1.gif"][name="space33"]').should('not.exist') 
    cy.get('[src="me1.gif"][name="space64"]').should('exist') 

    this.clicktomovepiece('31').click()
    this.PositionToMovePiece('42').click()
    cy.get('[src="me1.gif"][name="space73"]').should('exist') 

    this.clicktomovepiece('42').click()
    this.PositionToMovePiece('53').click()
    cy.get('[src="me1.gif"][name="space33"]').should('exist') 

    this.clicktomovepiece('22').click()
    this.PositionToMovePiece('44').click()
    cy.get('[src="me1.gif"][name="space33"]').should('not.exist') 
    cy.get('[src="me1.gif"][name="space15"]').should('exist') 

    this.clicktomovepiece('24').click()
    this.PositionToMovePiece('35').click()
    cy.get('[src="me1.gif"][name="space24"]').should('exist') 
    cy.get('[src="me1.gif"][name="space35"]').should('not.exist')

    this.clicktomovepiece('13').click()
    this.PositionToMovePiece('35').click()
    cy.get('[src="me1.gif"][name="space24"]').should('not.exist')
    cy.get('[src="me1.gif"][name="space24"]').should('exist')

    this.clicktomovepiece('11').click()
    this.PositionToMovePiece('22').click().wait(2000)
    this.clicktomovepiece('20').click()
    this.PositionToMovePiece('11').click().wait(2000)
    this.clicktomovepiece('40').click()
    this.PositionToMovePiece('31').click().wait(2000)
    this.clicktomovepiece('22').click()
    this.PositionToMovePiece('13').click().wait(2000)
    this.clicktomovepiece('13').click()
    this.PositionToMovePiece('04').click().wait(2000)
    this.clicktomovepiece('35').click()
    this.PositionToMovePiece('26').click().wait(2000)
    this.clicktomovepiece('26').click()
    this.PositionToMovePiece('17').click().wait(2000)
    this.clicktomovepiece('04').click()
    this.PositionToMovePiece('26').click().wait(2000)
    this.clicktomovepiece('31').click()
    this.PositionToMovePiece('42').click().wait(2000)
    this.clicktomovepiece('26').click()
    this.PositionToMovePiece('37').click().wait(2000)
    this.clicktomovepiece('37').click()
    this.PositionToMovePiece('46').click().wait(2000)
    this.clicktomovepiece('02').click()
    this.PositionToMovePiece('24').click().wait(2000)
    this.clicktomovepiece('11').click()
    this.PositionToMovePiece('33').click().wait(2000)
    cy.get('[id="message"]').should('be.visible')
    
*/

}
}

export default chakergame;