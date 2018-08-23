Feature: To Test the Music Module Apis

  @times
  Scenario: Detail Screen - To test contributor values-Artist  Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint           | FileName        | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/detail/creator | MusicModule.txt | json         |    0 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | type                             |
      | videoCount                       |
      | sections[1].next                 |
      | sections[1].name                 |
      | sections[1].items[0].duration    |
      | sections[1].items[0].title       |
      | sections[1].items[0].releaseDate |
    Then Check whether the following values are matching for "GET Request"
      | type | artist |
