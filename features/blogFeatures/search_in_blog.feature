@post
Feature: Search in blog
    This Feature search into the blog by certain topic

    Background: Navigation
        Given The user goes to the site
        And The user goes to the blog

    Scenario Outline: The user filters blog by certain topic
        When The user filters by "<Topic>"
        Then The user should see the filtered posts by "<Topic>"
        Examples:
            | Topic     |
            | flutter   |
            | bash      |
            | zsh       |
            | sssssssss |