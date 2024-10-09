Feature: Run simple test

    Scenario: Make your first click on wbsite

    Given I am on facebook homepage     
    Then I verify login email field is enabled
    And I verify login password field is enabled
    And I verify login button is enabled

