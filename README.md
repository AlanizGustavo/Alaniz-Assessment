<h1 style="text-align: center;">QA NEST ASSESSMENT - PATAGONIAN 2022</h1>

<center><img src="assets/nest.jpeg" alt="Nest Pingui" width="600"/></center>


### QA Automation Developer
      Alaniz Gustavo
---
## Index
1. [Assignment given](#assignment)
2. [Requirements](#requirements)
3. [Usage](#usage)
4. [Run tests](#run-tests)
5. [Browser selection](#browser-selection)
6. [Debugging Features](#debugging-features)
7. [In Visual Studio Code](#vsc)
8. [View report of the last run](#report)
9. [Create your own test](#create-your-own-test)
10. [Ignore a scenario](#ignore)
11. [Test Code Generator](#codegen)
12. [Documentation](#doc)
---

<div id="assignment"></div>

## Assignment given 

Register on platzi platform
        https://platzi.com/

Cases to automate using Playwright, Cucumber and Gherkin.
- Access the site
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
<div id="requirements"></div>

## Requirements:

- node>=14
---
<div id="usage"></div>

## Usage

1. Clona el repositorio
```bash
#Clonar con HTTPS
$ git clone https://github.com/AlanizGustavo/assessment-Alaniz.git
#Clonar con SSH
$ git clone git@github.com:AlanizGustavo/assessment-Alaniz.git
```
2. Run `npm install` command. After that you will be able to start running or creating your own test cases
```bash
$ npm install
```
3. Create a `.env` file following the `.env.example` structure.

---
<div id="run-tests"></div>

## To run tests
All of this commands will reproduce the test in headless mode. If you want to see all the steps en headed mode, set the `headless` attribute to `false` in `src/support/config.ts` file.

- `npm run test` or `npx cucumber-js` runs all tests
- `npm run test "<Scenario>"` or `npx cucumber-js --name "<Scenario>"`  run the single scenario
    ```bash
    $ npm run test "login"
    $ npx cucumber-js --name "login"
    ```
- `npx cucumber-js --tags "<your tags names>"` runs all test with the listed tags
    ```bash
    $npx cucumber-js --tags "login"
    ```
---

<div id="browser-selection"></div>

## Browser selection

By default we will use webkit to avoid captcha. You can define an envrionment variable called BROWSER and
set the name of the browser. Available options: chromium, firefox, webkit

On Linux and Mac you can write:
```bash
#To run all tests using Firefox
$ BROWSER=firefox npm run test
#or 
$ BROWSER=firefox npx cucumber-js
```
---

<div id="debugging-features"></div>

## Debugging Features

- `PWDEBUG=1 npx cucumber-js --name "Scenario name"` to run test step by step in debug mode
    ```bash
    $ PWDEBUG=1 npx cucumber-ts --name "login"
    ```
- `PWVIDEO=1 npx cucumber-js --name "Scenario name"` headless mode with video
    ```bash
    $ PWVIDEO=1 npx cucumber-ts --name "login"
    ````
---
<div id="vsc"></div>

## In Visual Studio Code

It is recommended to use [Cucumber-Gherkin](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete) extension. It will help with the features files

---
<div id="report"></div>

## To view the html report of the last run

- run the command
    ```bash
    $ npm run report
    ```
---
<div id="create-your-own-test"></div>

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

<div id="ignore"></div>

## To ignore a scenario

- tag the scenario with `@ignore`
---
<div id="codegen"></div>

## To Generate test
Run codegen and perform actions in the browser. Playwright will generate the code for the user interactions.
`npx playwright codegen <url>`
```bash
$ npx playwright codegen wikipedia.org
```
---
<div id="doc"></div>

### Annex - Documentation

- [***Cucumber***: ](https://cucumber.io/docs/bdd/)Behavior-Driven Development (BDD)
- [***Playwright:***](https://playwright.dev/docs/intro) Library for end-to-end testing
- Project Based on: [Cucumber-Playwright](https://github.com/Tallyb/cucumber-playwright) repository

