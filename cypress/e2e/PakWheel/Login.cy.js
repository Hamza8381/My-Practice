describe('Pak Wheel Login Page', () => {
  // const Login = 'https://www.pakwheels.com/login'

    // beforeEach(() => {
    //   cy.visit(Login);
   // });
    it('Login Using Command', () => {

      cy.visit('https://www.pakwheels.com/login')
      // cy.Clicklink ("Continue with Email")

      cy.Clicklink('Continue with Email')
      //cy.get('[data-login-method="SignInWithEmail"]').eq(0).click()
      cy.Login("Hamzasaleem129@gmail.com" , "Hamza129")
      cy.get('[title="Welcome  hamzasaleem129!"]').should('be.visible')
    });

  })