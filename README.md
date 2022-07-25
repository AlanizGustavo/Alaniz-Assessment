# QA NEST ASSESSMENT - PATAGONIAN 2022

![Nest Pingui](assets/nest.jpeg)


### QA Automation Developer
      Alaniz Gustavo
---
## Index
1. [Assignment given](#assignment-given)
2. [Requirements](#requirements)
3. [Usage](#usage)
4. [Test Cases Included](#test-cases-included)
5. [Run tests](#to-run-tests)
6. [Browser selection](#browser-selection)
7. [Debugging Features](#debugging-features)
8. [In Visual Studio Code](#in-visual-studio-code)
9. [View report of the last run](#to-view-the-html-report-of-the-last-run)
10. [Create your own test](#create-your-own-test)
11. [Ignore a scenario](#to-ignore-a-scenario)
12. [Test Code Generator](#to-generate-test)
13. [Documentation](#annex---documentation)
---

## Assignment given 

Cases to automate using Playwright, Cucumber and Gherkin.
- Access the site https://platzi.com/
- Search for a topic "X" in the top search engine .
- Scroll through the top tags (Courses, Schools, Classes) and count the number of pages that each one has.
- Access the first course, get and show how many opinions it has.
- Access the Platzi blog and search for a "Y" topic.
- Sort the list by "Most voted".
- Get the first and return the name and the total number of Likes.

### Tester Application
- You should have your own public repository with your code. Remember to make commits.
- Run the test a couple of times and verify that it works every time.
- Report errors when you find them either via console or screenshot.
- Generate an output report.
- Take points from the assignment and create the tasks in Clickup in the assigned project within sprint1.
    - Gustavo's Clickup: https://app.clickup.com/3094033/v/s/49677444
- Assign them to Mariano Sckerl and notify him. They will be returned with the changed state simulating that it is ready for testing and will be assigned to the testers so that they can place evidence and give continuity to the next state.
- Neatness, organisation, comments will be evaluated. Both in code and in the tasks.

---

## Requirements:

- node>=14
```bash
        # NVM instalation
        $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
        # install node v14.19.1
        $ nvm install 14.19.1
        # use node version v14.19.1
        $ nvm use v14.19.1
```
---

## Usage

1. Clone the repository
```bash
#Clone with HTTPS
$ git clone https://github.com/AlanizGustavo/assessment-Alaniz.git
#Clone with SSH
$ git clone git@github.com:AlanizGustavo/assessment-Alaniz.git
```
2. Run `npm install` command. After that you will be able to start running or creating your own test cases
```bash
$ npm install
```
3. Create a `.env` file following the `.env.example` structure.
4. Run the command below to validate installation
```bash
$ PWDEBUG=1 npx cucumber-ts --name "Validate installation"
```

---
## Test Cases included
```bash
# Get to the website
$ PWDEBUG=1 npx cucumber-js --name "The user is in landing page"

# Search for a topic
$ PWDEBUG=1 npx cucumber-js --name "The user filters courses by certain topic"

# Count tabs pages
$ PWDEBUG=1 npx cucumber-js --name "The user know how many pages has each tab in the topic serched"

# Count opinions in a course
$ PWDEBUG=1 npx cucumber-js --name "The user know how many opinions has the selected course"

# Search in blog
$ PWDEBUG=1 npx cucumber-js --name "The user filters blog by certain topic"

# Sort posts by most voted
$ PWDEBUG=1 npx cucumber-js --name "The user filters posts by most voted"

# Show the most voted post
$ PWDEBUG=1 npx cucumber-js --name "The user identify the most voted post in the list sorted by the topic" 
```

---
## To run tests
All of this commands will reproduce the test in headless mode. If you want to see all the steps in headed mode, set the `headless` attribute to `false` in `src/support/config.ts` file.

- `npx cucumber-js` or `npm run test` runs all tests
- `npx cucumber-js --name "<Scenario>"`  run the single scenario
    ```bash
    $ npx cucumber-js --name "The user filters posts by most voted"
    ```
- `npx cucumber-js --tags "<your tags names>"` runs all test with the listed tags
    ```bash
    $ npx cucumber-js --tags @post
    ```
---

## Browser selection

By default we will use webkit to avoid captcha. You can define an environment by modifying the channel attribute by the browser of your choice and replicate the selected browser in the browser attribute in `/src/support/config.ts`. Available options: chromium, firefox, webkit

```javascript
const browserOptions: LaunchOptions = {
  slowMo: 0,
  headless: true,
  channel: 'webkit', //Modify this attribute 'webkit' by chromium or firefox
  args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
  firefoxUserPrefs: {
    'media.navigator.streams.fake': true,
    'media.navigator.permission.disabled': true,
  },
};

export const config = {
  browser: process.env.BROWSER || 'webkit', //Modify this attribute 'webkit' by chromium or firefox
  browserOptions,
};
```
---

## Debugging Features

- `PWDEBUG=1 npx cucumber-js --name "Scenario name"` to run test step by step in debug mode
    ```bash
    $ PWDEBUG=1 npx cucumber-js --name "The user filters posts by most voted"
    ```
- `PWVIDEO=1 npx cucumber-js --name "Scenario name"` headless mode with video
    ```bash
    $ PWVIDEO=1 npx cucumber-js --name "The user filters posts by most voted"
    ````
---

## In Visual Studio Code

It is recommended to use [Cucumber-Gherkin](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete) extension. It will help with the features files

---
## To view the html report of the last run

- run the command
    ```bash
    $ npm run report
    ```
---

## Create your own test
1. Create a new `test.feature` file in "feature" folder.
2. Write a feature with the following template
    ```gherkin
    Feature: Name of the feature
        Write a description of the feature
        
        Scenario: Name of the "Scenario"
            Given type your "Given" step here
            When type your "When" step here
            Then type your "Then" step here
    ```
3. Create a `step.ts` file in the `src/steps` folder
4. Write the steps with the following template
    ```typeScript
    Then('<Here you have to write the same sentence that you have writen in test.feature>', async function (this: ICustomWorld) {
        const page = this.page!;
        .
        ...your code here
        .
    });
    ```
5. Run your test to check if it works    
---

## To ignore a scenario

- tag the scenario with `@ignore`
---

## To Generate test
If you are not familiar with Playwright, run codegen and perform actions in the browser. Playwright will generate the code for the user interactions, where you can see the selectors used. 

`npx playwright codegen <url>`
```bash
$ npx playwright codegen platzi.com
```
---

### Annex - Documentation

- [***Cucumber***: ](https://cucumber.io/docs/bdd/)Behavior-Driven Development (BDD)
- [***Playwright:***](https://playwright.dev/docs/intro) Library for end-to-end testing
- Project Based on: [Cucumber-Playwright](https://github.com/Tallyb/cucumber-playwright) repository

