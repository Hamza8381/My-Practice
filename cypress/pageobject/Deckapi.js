class deckapi {
  defineadeck(deckcount) {
    return cy.request({
      methode: "Get",
      url: `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${deckcount}`,
    });
  }

  Drawcardsfromdeck(deck_id) {
    return cy.request({
      methode: "Get",
      url: `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`,
    });
  }

  Reshufflethecards(deck_id) {
    return cy.request({
      methode: "Get",
      url: `https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`,
    });
  }
  opennewdack() {
    return cy.request({
      methode: "Get",
      url: "https://deckofcardsapi.com/api/deck/new/",
    });
  }
  openPartialDeck() {
    return cy.request({
      methode: "Get",
      url: "https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH",
    });
  }
  AddPiles(deck_id, pile_Name) {
    return cy.request({
      methode: "Get",
      url: `https://deckofcardsapi.com/api/deck/${deck_id}/pile/${pile_Name}/add/?cards=AS,2S`,
    });
  }
}

export default deckapi;
