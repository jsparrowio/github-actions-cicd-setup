describe('Quiz e2e test', () => {
  beforeEach(() => {
    // visit the theoretically running web application
    cy.visit('http://localhost:3000');
  });

  it('should start the quiz when the button is clicked', () => {

    //check to make sure the button loads the quiz
    cy.get('button').contains('Start Quiz').click();
    cy.get(".card").should("be.visible").and('contain', "1");
    cy.get(".card").should("be.visible").and('contain', "2");
    cy.get(".card").should("be.visible").and('contain', "3");
    cy.get(".card").should("be.visible").and('contain', "4");

  });

  it('should display my score when the quiz is completed', () => {
    // checks to make sure the user can run through all questions and be presented with a score at the end
    cy.get('button').contains('Start Quiz').click();

    // clicks through all of the questions
    for (let i = 0; i < 10; i++) {
      cy.get('button').contains('1').click();
    }

    // checks to make sure the score is visible
    cy.get(".alert-success").should("be.visible").and('contain', 'Your score');

  })
})