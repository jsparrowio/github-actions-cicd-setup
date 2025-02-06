import React from 'react'
import Quiz from '../../client/src/components/Quiz'

describe('<Quiz />', () => {
  beforeEach(() => {
    // sets up a example question rather than actually making an API call to as server so we can run the test without a server running
    cy.intercept({
      method: "GET",
      url: "/api/questions/random"
    },
      {
        fixture: 'questions.json',
        statusCode: 200
      }
    )
  });

  it('renders', () => {
    // checks to ensure the component renders on the page
    cy.mount(<Quiz />)
  });

  it('mounts and displays the "start quiz" button', () => {
    // mount the component, then check to make sure the button to start the quiz is visible
    cy.mount(<Quiz />);

    cy.get('button').contains('Start Quiz').should("be.visible");
  });


  it('should display the first question when the "start quiz" button is clicked', () => {
    // mounts the component, clicks the start quiz button, and ensures the first question is displayed on the page
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();

    cy.get('h2').contains("What is the correct answer?").should("be.visible");
  });

  it('shows a loading message when the array of question objects is empty', () => {
    // first intercepts the API call with an empty questions array
    // then it mounts the component, clicks the start quiz button, then checks to make sure the loading message is displayed
    cy.intercept({
      method: "GET",
      url: "/api/questions/random"
    },
      {
        fixture: 'emptyquestions.json',
        statusCode: 200
      }
    )
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('span').contains("Loading...").should("be.visible");
  });
});

