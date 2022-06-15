@navigation
Feature: Access to the site
    This feature checks if the user is able to access the site.

    Scenario: The user is in landing page
        Given The user goes to the site
        Then The user should be in landing page