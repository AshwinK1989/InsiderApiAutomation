Feature: To Test the Live TV Module Apis

  @times
  Scenario: Player Screen - Music Feature - To test Player support for Live and DVR Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint              | FileName   | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/detail/collection | LiveTV.txt | json         |    0 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | duration |
      | title    |
    #| stream.hls.high        |
    #| stream.hls.base        |
    #| stream.hls.main        |
    Then Check whether the following values are matching for "GET Request"
      | stream.provider | mxplay      |
      | type            | liveChannel |
