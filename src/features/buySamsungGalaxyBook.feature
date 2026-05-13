Feature: buy product Functionality

@buyProduct
Scenario: Verify buy product successfully
    Given user lauches browser and url
    When user clicks on signin button
    And user enters email "test110@gmail.com"
    And user enters password "Test@1234"
    And user clicks on login button
    Then user landed on "https://ecommerceguru.odoo.com/my"
    When user clicks on Shop link
    When user clicks on add to cart button of Samsung Galaxy Book5 Pro 14
    When user clicks on viewcart button
    When user clicks on checkout button
    When user clicks on confirm button
    When user clicks on confirm button from extra info page
    When user clicks on I agree to the terms & conditions checkbox
    When user clicks on Pay now button
    When user clicks on skip now link
    Then user able to see the message "Thank you for your order."