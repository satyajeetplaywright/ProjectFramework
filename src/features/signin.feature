Feature: Signin Functionality

@validSignIn
Scenario: Verify Signin successfully with valid details
    Given user lauches browser and url
    When user clicks on signin button
    And user enters email "test110@gmail.com"
    And user enters password "Test@12345"
    And user clicks on login button
    Then user landed on "https://ecommerceguru.odoo.com/my"