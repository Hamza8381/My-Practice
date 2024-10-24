//--------------Api Calls using POM---------------//
import deckapi from "../../pageobject/Deckapi";
const Api = new deckapi();
let deck_id;
let deckcount = 1;
let pile_Name;

describe("Deck Api Testing using POM", () => {
  it("Define a Decks", () => {
    Api.defineadeck(deckcount).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("deck_id");
      expect(response.body).to.have.property("remaining");
      expect(response.body).to.have.property("success", true);
      expect(response.body).to.have.property("shuffled", true);
      //console.log(response);

      const expectedRemaining = deckcount * 52;
      expect(response.body.remaining).to.eq(expectedRemaining);
      deck_id = response.body.deck_id;
    });
  });

  it("Draw cards from deck", () => {
    Api.Drawcardsfromdeck(deck_id).then(response => {
      expect(response.body).to.have.property("deck_id");
      expect(response.body).to.have.property("success", true);
    });
  });

  it("Reshuffle the Cards ", () => {
    Api.Reshufflethecards(deck_id).then(response => {
      expect(response.body).to.have.property("success", true);
      expect(response.body).to.have.property("deck_id");
      expect(response.body).to.have.property("shuffled", true);
      expect(response.body).to.have.property("remaining");
      // console.clear();
      // console.log(response);
    });
  });
  it("Open a brand new deck of cards ", () => {
    Api.opennewdack().then(response => {
      expect(response.body).to.have.property("success", true);
      expect(response.body).to.have.property("deck_id");
      expect(response.body).to.have.property("shuffled", false);
      expect(response.body).to.have.property("remaining");
      // console.clear();
      // console.log(response);
    });
  });
  it("Open a Partial deck ", () => {
    Api.openPartialDeck().then(response => {
      expect(response.body).to.have.property("success", true);
      expect(response.body).to.have.property("deck_id");
      expect(response.body).to.have.property("shuffled", true);
      expect(response.body).to.have.property("remaining");

      // console.clear();
      // console.log(response);
    });
  });
  it("Adding to Piles", () => {
    pile_Name = "player";

    Api.AddPiles(deck_id, pile_Name).then(response => {
      expect(response.body).to.have.property("success", true);
      expect(response.body).to.have.property("deck_id");
      expect(response.body).to.have.property("remaining");
      expect(response.body).to.have.property("piles");
      // expect(response.body).should (Remaining).to.eq()

      console.clear();
      console.log(response);
    });
  });
});

//-------------- Test cases to verify Api Calls---------------//
/*
describe("Deck Api Testing", () => {
   it("Define a Decks", () => {
    const deckcount = 1;
    cy.request({
      methode: "Get",
      url: `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${deckcount}`,
    }).then(response => {

      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("deck_id");
      expect(response.body).to.have.property("remaining");
      expect(response.body).to.have.property("success", true);
      expect(response.body).to.have.property("shuffled", true);

      const expectedRemaining = deckcount * 52;
      expect(response.body.remaining).to.eq(expectedRemaining);

      deck_id = response.body.deck_id;
      // console.log(deck_id)
    });
  });

   it("Draw cards from deck", () => {
    cy.request({
      methode: "Get",
      url: `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`,
    }).then(response => {
      expect(response.body).to.have.property("deck_id");
      expect(response.body).to.have.property("success", true);
      // console.clear()
      // console.log(response)
    });
  });

   it("Reshuffle the cards ", () => {
    cy.request({
      methode: "Get",
      url: `https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`,
    }).then(response => {
      expect(response.body).to.have.property("success", true);
      expect(response.body).to.have.property("deck_id");
      expect(response.body).to.have.property("shuffled", true);
      expect(response.body).to.have.property("remaining");

      // console.clear()
      // console.log(response)
    });
  });
   it("Open a brand new deck of cards ", () => {
    cy.request({
      methode: "Get",
      url: "https://deckofcardsapi.com/api/deck/new/",
    }).then(response => {
      expect(response.body).to.have.property("success", true);
      expect(response.body).to.have.property("deck_id");
      expect(response.body).to.have.property("shuffled", false);
      expect(response.body).to.have.property("remaining");
      // console.clear()
      // console.log(response)
    });
  });

  it("Open a Partial deck ", () => {
    cy.request({
      methode: "Get",
      url: "https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH",
    }).then(response => {
      expect(response.body).to.have.property("success", true);
      expect(response.body).to.have.property("deck_id");
      expect(response.body).to.have.property("shuffled", true);
      expect(response.body).to.have.property("remaining");

      console.clear();
      console.log(response);
    });
  });

  it("Adding to Piles", () => {
    pile_Name = "player";

    cy.request({
      methode: "Get",
      url: `https://deckofcardsapi.com/api/deck/${deck_id}/pile/${pile_Name}/add/?cards=AS,2S`,
    }).then(response => {
      expect(response.body).to.have.property("success", true);
      expect(response.body).to.have.property("deck_id");
      expect(response.body).to.have.property("remaining");
      expect(response.body).to.have.property("piles");
      // expect(response.body).should (Remaining).to.eq()

      // console.clear()
      // console.log(response)
    });
  });
});
*/
