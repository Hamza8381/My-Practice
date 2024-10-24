/* it('Check Title', () => {
    cy.visit('https://www.pakwheels.com/')
    cy.title().should('eq' , 'Buy & Sell Cars, Bikes & Autoparts - Find Car Prices, News & Reviews | PakWheels')

  })

  it('Check the title of page', () => {
    cy.title().should('eq' , 'Buy & Sell Cars, Bikes & Autoparts - Find Car Prices, News & Reviews | PakWheels')
  })*/

//--------------Sign up Test Cases---------------//

describe("Pakwheel Signup page Test", () => {
  const SignupUrl = "https://www.pakwheels.com/signup";

  beforeEach(() => {
    cy.visit(SignupUrl);
  });

  it("Signup page loaded successfully", () => {
    cy.title().should("eq", "Sign Up | PakWheels");
    cy.get(".mb20").should("be.visible");
  });

  it("Display an error message when required fields are empty", () => {
    cy.get('button:contains("Create Account")').click({ force: true });
    cy.get(".parsley-required").should("be.visible");
  });

  it("Display an error message when all fields are empty except Email", () => {
    cy.get('input[placeholder="Email"]').type("hamza2@yopmail.com");
    cy.get('button:contains("Create Account")').click({ force: true });
    cy.get(".parsley-required").should("be.visible");
  });

  it("Display an error message when all fields are empty except FullName", () => {
    cy.get('input[placeholder="Full Name"]').type("Hamza");
    cy.get('button:contains("Create Account")').click({ force: true });
    cy.get(".parsley-required").should("be.visible");
  });

  it("Display an error message when all fields are empty except Passwprd", () => {
    cy.get('input[placeholder="Password"]').type("Hamza2");
    cy.get('button:contains("Create Account")').click({ force: true });
    cy.get(".parsley-required").should("be.visible");
  });

  it("Display an error message when all fields are empty except Confirm Passwprd", () => {
    cy.get('input[placeholder="Confirm Password"]').type("Hamza2");
    cy.get('button:contains("Create Account")').click({ force: true });
    cy.get(".parsley-required").should("be.visible");
    cy.get(".parsley-equalto").should("be.visible");
  });

  it("Display an error when Password Does not Match", () => {
    cy.get('input[placeholder="Full Name"]').type("Hamza");
    cy.get('input[placeholder="Email"]').type("hamza21@yopmail.com");
    cy.get('input[placeholder="Password"]').type("Hamza2");
    cy.get('input[placeholder="Confirm Password"]').type("Hamza21");
    cy.get('button:contains("Create Account")').click({ force: true });
    cy.get(".parsley-equalto").should("be.visible");
  });

  it("Display an error message when Email is already taken", () => {
    cy.get('input[placeholder="Full Name"]').type("Hamza");
    cy.get('input[placeholder="Email"]').type("hamza2@yopmail.com");
    cy.get('input[placeholder="Password"]').type("Hamza21");
    cy.get('input[placeholder="Confirm Password"]').type("Hamza21");
    cy.get('button:contains("Create Account")').click({ force: true });
    cy.get(".parsley-errorField").should("be.visible");
  });

  it.only("Account created sucessfully", () => {
    cy.get('input[placeholder="Full Name"]').type("Hamza");
    cy.get('input[placeholder="Email"]').type("Hamzasaleem8381@yopmail.com");
    cy.get('input[placeholder="Password"]').type("Hamza21");
    cy.get('input[placeholder="Confirm Password"]').type("Hamza21");
    cy.get('button:contains("Create Account")').click({ force: true });
    cy.get(".well.infobip-well").should("be.visible");
  });
});
