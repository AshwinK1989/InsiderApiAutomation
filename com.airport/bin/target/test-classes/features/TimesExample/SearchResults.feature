Feature: To Test the Search Results Api

  @times
  Scenario: To Test Search Results Query Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint          | FileName                    | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/search/result | SearchResultsGetRequest.txt | json         |    1 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | sections[0].id                   |
      | sections[0].style                |
      | sections[0].items[0].title       |
      | sections[0].items[0].releaseDate |
      | sections[0].items[0].type        |

  @times
  Scenario: To Test Search Results Trending Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint            | FileName                    | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/search/trending | SearchResultsGetRequest.txt | json         |    0 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | [0].query       |
      | [0].exact_query |

  #| [0].timestamp   |
  #| [0].count       |
  @times
  Scenario: To Test Search Suggestion Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint           | FileName                    | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/search/suggest | SearchResultsGetRequest.txt | json         |    2 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | [0].query       |
      | [0].exact_query |
      #| [0].timestamp   |
      #| [0].count       |
