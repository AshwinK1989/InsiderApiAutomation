Feature: Insider API Tests

  @insider
  Scenario: To test Home Api.
    Then Check whether the get request status code is correct having Data
      | EndPoint | FileName | Content Type | Data | Response Code | 
      | /home    | Home.txt | json         |    0 |           200 |
    Then Print the list of "events " for "popular.findAll{it.type=='event'}.name"
    Then Print the list of "Music Event Names " for "popular.findAll{it.category_id.name=='Music'}.name"
    Then Print the list of "Event Info " for "popular.findAll{it.category_id.name=='Music'}.venue_name"
    Then Verify "response-time" is less than 1000