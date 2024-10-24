import chakergame from "../../pageobject/Chakergame.js";
import Losschakergame from "../../pageobject/Losschakergame.js";
const Wingame = new chakergame();
const Lossgame = new Losschakergame()

describe('Chaker Game', () => {
    const ChakerUrl = 'https://www.gamesforthebrain.com/game/checkers/';
    
    beforeEach(() => {
      cy.visit(ChakerUrl);
    });

    it('Win Chaker Gmae using POM', () => {

        Wingame.PlayChakerGame()
     })

     it('Loss Chaker Gmae using POM', () => {

      Lossgame.PlayChakerGame()
   })

   it.only("Perform moves Using Fixture" , ()=>{
    cy.fixture('movements.json').then ((move) => {
      
        move.forEach((data) =>{

        cy.get(`[name="space${data.from}"]`).click()
        cy.get(`[name="space${data.to}"]`).click()
        cy.get(`[src="me1.gif"][name="space${data.Kill}"]`).should('not.exist')
        cy.get(`[src="me1.gif"][name="space${data.opponentMove}"]`).should('exist')

      })

      cy.get('[id="message"]').should('have.text' , 'You have won!')

    })

   })

     /**  --------------Tasks--------------------
      * 
      * ---------------Lose a game---------------(Done)
      *  --> Make sure you use te dynamic selecters (Done)
      *  --> No Code repetition (Done)
      *  --> Use data files to store the moves 
      *  --> Use a loop to make all moves (Done)
      *  --> Add an assertion in place of the .wait(2000), (Done)
      *  --> You try to verify that opponent has made a move (Done)
      * ---------------Opponent Kills Our Piece--------------- (Done)
      * ---------------We Kill Opponent Piece--------------- (Done)
      * 
      * 
      */

    })
