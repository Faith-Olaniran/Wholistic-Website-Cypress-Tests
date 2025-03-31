# Wholistic Website Cypress Tests

This repository contains end-to-end tests for the Wholistic Website using Cypress.

## Prerequisites

Before running the tests, ensure you have the following installed:

- [Node.js]
- [Git]
- [Cypress]

## Setup

1. Clone the Repository

   Clone this repository to your local machine using the following command:

      git clone https://github.com/Faith-Olaniran/Wholistic-Website-Cypress-Tests.git
   cd Wholistic-Website-Cypress-Tests
   

2. Install Dependencies

   Install the necessary dependencies using npm:

      npm install
   

   This will install Cypress and any other dependencies specified in the package.json file.

## Running the Tests

## Open Cypress UI

   To run the tests in Cypress’s interactive mode, use the following command:

      npx cypress open
   
   This will open the Cypress Test Runner, where you can select and run specific tests from the UI.

## Test Files

The test scripts are located in the cypress/e2e folder. You can create additional tests or modify existing ones based on the requirements.

## Troubleshooting

- Error: `cannot pull with rebase: You have unstaged changes`  
  Make sure all your changes are committed or stashed before pulling from the repository.

- Error: `Updates were rejected because the remote contains work that you do not have locally`  
  Pull the latest changes from the remote repository before pushing your changes.

## Contributing

Feel free to fork the repository, create issues, and submit pull requests if you'd like to contribute to this project. 
