Feature: To Test the Pagination Recommendation Module Apis

  @times
  Scenario: Movies - To Test Movie Recommend Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint                           | FileName                     | Content Type | Data | Response Code | UserID | Platform             |
      |/v1/detail/tab/movierecommended     | PaginationRecommendation.txt | json         |    0 |           200 | ABC    | com.mxplay.iOSPlayer |
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
  Scenario: Short Videos - To Test Watch Next Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint                              | FileName                     | Content Type | Data | Response Code | UserID | Platform             |
      |/v1/detail/tab/shortvideowatchnext     | PaginationRecommendation.txt | json         |    2 |           200 | ABC    | com.mxplay.iOSPlayer |
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
  Scenario: Short Videos - To Test Short Related Videos Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint                                  | FileName                     | Content Type | Data | Response Code | UserID | Platform             |
      |/v1/detail/tab/shortvideorelatedvideos     | PaginationRecommendation.txt | json         |    1 |           200 | ABC    | com.mxplay.iOSPlayer |
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