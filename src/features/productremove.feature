Feature: Product remove functionality

@removeProduct
Scenario: Verify user is able to remove product from cart
Given user lauches browser and url
    When user clicks on signin button
    And user enters email "test110@gmail.com"
    And user enters password "Test@12345"
    And user clicks on login button
    Then user landed on "https://ecommerceguru.odoo.com/my"
    When user clicks on Shop link
    When user clicks on add to cart button of Samsung Galaxy Book5 Pro 14
    When user clicks on viewcart button
    When user clicks on remove link
    Then user user is able to see message "Your cart is empty!"