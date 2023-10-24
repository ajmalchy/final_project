Feature: Sprint-1
     Background: 
     Given I am on hotels.com homepage

     @TC-21
     Scenario Outline: Verify Verification message for invalid sign in credentials
     When I click sign in link
     And I click sign in button
     And I enter <signinEmail> as login email
     And I click continue button
     Then I verify signin error message is displayed
     
     Example:
        | signinEmail |
        | %$%^$$@gmail.com | 
         

    @TC-28
     Scenario Outline: Verify Child-age dropdowns are same as number of Children selected

     When I click on Travelers
     And I select "Children" as 2
    #  Then I verify Children-age dropdown are 2
    #  And I verify Plus-button is enabled
    #  And I verify minus-button is enabled

    #  When I select "Children" as 6
    #  Then I verify Children-age dropdown are 6
    #  And I verify Plus button is disabled
    #  And I verify minus-button is enabled
    #  When I select "Children" as 5
    #  Then I verify Children-age dropdown are 5
    #  And I verify Plus-button is enabled
    #  And I verify minus-button is enabled
    #  When I select "Children" as 0
    #  Then I verify Children-age dropdown is NOT displayed
    #  And I verify Plus-button is enabled
    #  And I verify minus-button is disabled