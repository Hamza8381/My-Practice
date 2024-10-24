let deck_id;
let pile_Name;
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

  it("Shuffle the cards ", () => {
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
