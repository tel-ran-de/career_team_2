Feature: Search

  Scenario: Positive Search by Profession
    Given Navigate to Home Page
    When we click on the search field
    Then See video for Financial Analyst

  @Smoke
  Scenario: Positive Search by industry
    Given Navigate to Home Page
    Given Search by industry
    When we click on the search field 1
    Then See a video of Quantitative Analyst

  Scenario: Negative Search
    Given Negative Search Test
    When we click on the search field 2
    * type "sea" and press enter
    Then an error

  Scenario: Positive Search by Specialty, Industry, сompany Size
    Given Navigate to Home Page
    When click on check
    * by profession
    * by branch
    * by company size
    And press enter
    Then we see a video of the direction we want to go

  Scenario: Positive linking to social networks
    Given Navigate to Home Page
    When hovering over the telegram bot button
    And click the telegram bot button
    Then go to the telegram bot

  Scenario: Positive linking to social networks
    Given Navigate to Home Page
    When you hover your cursor over the Reddit button
    And click on the Reddit button
    Then go to the Reddit page

  Scenario: Positive linking to social networks
    Given Navigate to Home Page
    When you hover your cursor over the Linkedin button
    And click the LinkedIn button
    Then go to the LinkedIn page