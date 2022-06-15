@tab @numPages
Feature: Count tabs pages
    This Feature count how many pages has each tab in search results page

    Background: Navigation
        Given The user goes to the site

    Scenario: The user know how many pages has each tab in the topic serched
        When The user looks for "<Topic>"
        Then The user should see the number of pages of each tab if there are more than one in "<Topic>"

        Examples:
            | Topic        |
            | react native |
            | sssssss      |
            | c            |
            | typescript   |