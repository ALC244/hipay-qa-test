Feature: HiPay contact form

  Scenario: Successful form submission
    Given I open the HiPay fraud management contact page
    Then I should see the contact form "About you"

    When I fill the contact form with a valid dataset "jeanMartin"
    And I submit the form
    Then the form should be submitted successfully

  Scenario: Form validation
    Given I open the HiPay fraud management contact page
    Then I should see the contact form "About you"

    When I fill the "email" field with "jeanmartin@yopmail.com"
    Then I should see the error message for "email"

    When I fill the "phone" field with "<"
    Then I should see the error message for "phone"

    When I fill the "phone" field with "+222"
    Then I should see the error message for "phoneRange"

    When I fill the contact form with a valid dataset "jeanMartin"
    Then I should not see errors on required fields
