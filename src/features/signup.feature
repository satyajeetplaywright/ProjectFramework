Feature: Signup Functionality

    @valid_details 
    Scenario: Verify Signup with valid details
        Given user lauches browser and url
        When user clicks on signin button
        And user clicks on dont have account link
        And user enters name "test110" and email "test110@gmail.com"
        And user enters password "Test@1234" and confirm password "Test@1234"
        And user clicks on signup button
        Then verify account created

    @invalid_details
    Scenario: Verify Signup with invalid (duplicate email) details
        Given user lauches browser and url
        When user clicks on signin button
        And user clicks on dont have account link
        And user enters name "test101" and email "test101@gmail.com"
        And user enters password "Test@1234" and confirm password "Test@1234"
        And user clicks on signup button
        Then verify user gets text as "Another user is already registered using this email address."

    @blank_details
    Scenario: Verify Signup with blank details
        Given user lauches browser and url
        When user clicks on signin button
        And user clicks on dont have account link
        And user enters name "" and email ""
        And user enters password "" and confirm password ""
        And user clicks on signup button
        # Then verify user is able to see "Please fill out this field"
        Then Then user should see validation error for required fields