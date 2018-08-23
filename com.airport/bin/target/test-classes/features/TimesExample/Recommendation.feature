Feature: To Test the Recommendation Module Apis

  @times
  Scenario: Short Videos - To Test Short Videos Watch Next Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint                           | FileName                     | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/detail/tab/shortvideowatchnext | RecommendationGetRequest.txt | json         |    0 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | id                        |
      | style                     |
      | items[0].duration         |
      | items[0].title            |
      | items[0].releaseDate      |
      #| items[0].stream.dash.high |
      #| items[0].stream.dash.base |
      #| items[0].stream.dash.main |
      | next                      |
      | name                      |
    Then Check whether the following values are matching for "GET Request"
      | items[0].stream.provider | mxplay |

  @times
  Scenario: Movies - To Test Movie recommended Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint                        | FileName                     | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/detail/tab/movierecommended | RecommendationGetRequest.txt | json         |    2 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | id                        |
      | style                     |
      | name                      |
      | items[0].duration         |
      | items[0].title            |
      | items[0].releaseDate      |
      #| items[0].stream.dash.high |
      #| items[0].stream.dash.base |
      #| items[0].stream.dash.main |
    Then Check whether the following values are matching for "GET Request"
      | items[0].stream.provider | mxplay |

  @times
  Scenario: Movies - To Test Movie Related Clips Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint                          | FileName                     | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/detail/tab/movierelated_clips | RecommendationGetRequest.txt | json         |    3 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | id                        |
      | style                     |
      | items[0].duration         |
      | items[0].title            |
      | items[0].releaseDate      |
      #| items[0].stream.dash.high |
      #| items[0].stream.dash.base |
      #| items[0].stream.dash.main |
      | next                      |
      | name                      |
    Then Check whether the following values are matching for "GET Request"
      | items[0].stream.provider | mxplay |

  @times
  Scenario: TV Show - To Test TV Show Episodes Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint                      | FileName                     | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/detail/tab/tvshowepisodes | RecommendationGetRequest.txt | json         |    4 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | id                        |
      | style                     |
      | items[0].duration         |
      | items[0].title            |
      | items[0].releaseDate      |
      #| items[0].stream.dash.high |
      #| items[0].stream.dash.base |
      #| items[0].stream.dash.main |
      | next                      |
      | name                      |
    Then Check whether the following values are matching for "GET Request"
      | items[0].stream.provider | mxplay |
