Feature: To Test the All Screen Pagination-Styles Api

  @times
  Scenario: To All Screen Pagination Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint       | FileName                          | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/home/tab/1 | AllScreenPaginationGetRequest.txt | json         |    0 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | sections[0].id                        |
      | sections[0].style                     |
      | sections[0].items[0].duration         |
      | sections[0].items[0].title            |
      | sections[0].items[0].releaseDate      |
      #| sections[0].items[0].stream.dash.high |
      #| sections[0].items[0].stream.dash.base |
      #| sections[0].items[0].stream.dash.main |
      | next                                  |

  @times
  Scenario: To test Styles Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint       | FileName                          | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/home/tab/1 | AllScreenPaginationGetRequest.txt | json         |    1 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | sections[0].id                        |
      | sections[0].style                     |
      | sections[0].items[0].duration         |
      | sections[0].items[0].title            |
      | sections[0].items[0].releaseDate      |
      #| sections[0].items[0].stream.dash.high |
      #| sections[0].items[0].stream.dash.base |
      #| sections[0].items[0].stream.dash.main |
      | next                                  |