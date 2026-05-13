Feature: Logout Functionality

@logout
Scenario: Verify logout successfully
    Given user lauches browser and url
    When user clicks on signin button
    And user enters email "test110@gmail.com"
    And user enters password "Test@1234"
    And user clicks on login button
    Then user landed on "https://ecommerceguru.odoo.com/my"
    When user click on accountDropdown
    When user clicks on logout button
    Then user landed on "https://ecommerceguru.odoo.com/"