Feature: payment method functionality

@paymentDetailsAdd
Scenario: Verify user is able to add card details
    Given user lauches browser and url
    When user clicks on signin button
    And user enters email "test110@gmail.com"
    And user enters password "Test@1234"
    And user clicks on login button
    Then user landed on "https://ecommerceguru.odoo.com/my"
    When user click on accountDropdown
    When user cliks on my Account button
    When user clicks on payment Method link
    When user add payment details "1111222233335555"
    When user clicks on save button
    Then user is able to see the payment details on payment details page "1111222233335555"