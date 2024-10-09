Feature: Automation
    Background: 
    Given I am on Automation website

    @testCase-1
    Scenario: Search Product
    Then I verify that homepage is visible successfully
    When I click on "Products" Button
    Then I verify that ALL Product Page is visible
    When I enter product name "Winter Top" in search input
    And I click search button
    # Then I verify the Searched Product is visible
 


