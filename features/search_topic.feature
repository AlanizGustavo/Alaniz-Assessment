Feature: Search for a topic
    This feature searches for a topic in the search engine

    Background: Navigation
        Given The user goes to the site

    Scenario Outline: The user filters courses by certain topic
        When The user looks for "<Topic>"
        Then The user should see the filtered courses
        Examples:
            | Topic        |
            | react native |
            | javascript   |
            | typescript   |
            | sssssss      |