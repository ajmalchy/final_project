Feature: autosuggestion

    Scenario: Verify user can select value from auto-suggestion

    Given I am on hotels.com homepage
    When I click Going to button
    And I write new to location field
    And I select Newport Beach from autosuggestion

