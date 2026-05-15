Feature: address functionality

@addAddress
Scenario: Verify user is able to add address
    Given user lauches browser and url
    When user clicks on signin button
    And user enters email "test110@gmail.com"
    And user enters password "Test@12345"
    And user clicks on login button
    Then user landed on "https://ecommerceguru.odoo.com/my"
    When user click on accountDropdown
    When user cliks on my Account button
    When user clicks on Addresses link
    When user clicks on add address button
    When user enters name as "test110", email as "test111@gmail.com", phone as "7777766666"
    When user enters street as "MG road", city as "Mumbai", zip code as "777666"
    When user clicks on save address button
    Then user is able to see "MG road" and "Mumbai" in added address