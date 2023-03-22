Feature: Search

  Scenario: Open Page
    Given Navigate to Home Page

  Scenario: Positive Search by Profession
    Given Navigate to Home Page
    When we click on the search field
    * Enter the profession "programmer" and click the search button
    Then See video for programmers

  Scenario: Positive Search by industry
    Given Navigate to Home Page
    When we click on the search field
    * Enter "aviation" by industry and press enter
    Then See a video of aviation

  Scenario: Negative Search
    Given Navigate to Home Page
    When we click on the search field
    * type "sea" and press enter
    Then an error