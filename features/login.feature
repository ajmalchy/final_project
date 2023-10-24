Feature: Login
     Background: 
     Given I am on facebook homepage
     @login-1
     Scenario: Verify empty login fields are enabled
        Given I am on facebook homepage     
        Then I verify login email field is enabled
        And I verify login password field is enabled
        And I verify login button is enabled

     @login-2
     Scenario Outline: Verify error for invalid credentials

     When I enter <loginEmail> as login email
     And I enter <loginPwd> as login password
     And I click login button
     Then I verify login error is displayed
     
     Example:
        | loginEmail | loginPwd |
        | adgag | asdgagag | 
        | sgsg | asdgsgsh |
        | grujazh | gsgaeag | 
     

    