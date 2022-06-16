@post @mostVoted @likes
Feature: Show the most voted post
    This feature shows the most voted post and the number of likes

    Background: Navigation
        Given The user goes to the site
        And The user goes to the blog

    Scenario Outline: The user identify the most voted post in the list sorted by the topic
        When The user filters by "<Topic>"
        And The user filters by most voted
        Then The user should see, according to the searched topic: "<Topic>", the most voted post and its likes.
        Examples:
            | Topic     |
            | flutter   |
            | bash      |
            | zsh       |
            | sssssssss |