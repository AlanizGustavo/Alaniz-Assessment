@post @mostVoted
Feature: Sort posts by most voted
    This feature sorts the posts according to the most voted post.

    Background: Navigation
        Given The user goes to the site
        And The user goes to the blog

    Scenario Outline: The user filters posts by most voted
        When The user filters by "<Topic>"
        And The user filters by most voted "<Topic>"
        Then The user should see posts sorted by most voted
        Examples:
            | Topic     |
            | flutter   |
            | bash      |
            | zsh       |
            | sssssssss |