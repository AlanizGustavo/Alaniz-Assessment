@tab @numOpinions
Feature: Count opinions in a course
    This Feature count how many opinions has certain course

    Background: Navigation
        Given The user goes to the site

    Scenario: The user know how many opinions has the selected course
        When The user looks for "<Topic>"
        And The user checks the existence of tabs
        Then The user should see the number of opinions of the selected course

        Examples:
            | Topic        |
            | react native |
            | sssssss      |
            | c            |
            | typescript   |