Feature: To Test the Details Module Api

  @times
  Scenario: Meta info & Playback Screen - Music Feature - To test home Music Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint         | FileName                  | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/detail/video | DetailsFlowGetRequest.txt | json         |    0 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | duration             |
      | title                |
      | releaseDate          |
      | contributors[0].name |
      #| contributors[0].role   |
      | contributors[0].type |
      | tabs[0].title        |
      #| tabs[0].style          |
      | tabs[0].type         |
      | tabs[0].api          |
    #| stream.dash.high       |
    #| stream.dash.base       |
    #| stream.dash.main       |
    Then Check whether the following values are matching for "GET Request"
      | stream.provider | mxplay |
      | type            | music  |

  @times
  Scenario: Meta info & Playback Screen - Movie Feature - To test home Movie Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint         | FileName                  | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/detail/video | DetailsFlowGetRequest.txt | json         |    1 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | duration             |
      | title                |
      | releaseDate          |
      | contributors[0].name |
      #| contributors[0].role |
      | contributors[0].type |
      | contributors[0].id   |
      | tabs[0].title        |
      #| tabs[0].style        |
      | tabs[0].type         |
      | tabs[0].api          |
    #| stream.dash.high     |
    #| stream.dash.base     |
    #| stream.dash.main     |
    Then Check whether the following values are matching for "GET Request"
      | stream.provider | mxplay |
      | type            | movie  |

  @times
  Scenario: Meta info & Playback Screen - Shorts Feature - To test Videos Shorts Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint         | FileName                  | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/detail/video | DetailsFlowGetRequest.txt | json         |    2 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | duration      |
      | title         |
      | releaseDate   |
      | tabs[0].title |
      #| tabs[0].style    |
      | tabs[0].type  |
      | tabs[0].api   |
    #| stream.dash.high |
    #| stream.dash.base |
    #| stream.dash.main |
    #| contributors[0].name |
    #| contributors[0].role |
    #| contributors[0].type |
    #| contributors[0].id   |
    Then Check whether the following values are matching for "GET Request"
      | stream.provider | mxplay |
      | type            | shorts |

  @times
  Scenario: Meta info & Playback Screen - Episodes Feature - To test Videos Episodes Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint         | FileName                  | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/detail/video | DetailsFlowGetRequest.txt | json         |    3 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | duration      |
      | title         |
      | releaseDate   |
      | tabs[0].title |
      #| tabs[0].style    |
      | tabs[0].type  |
      | tabs[0].api   |
    #| stream.dash.high |
    #| stream.dash.base |
    #| stream.dash.main |
    Then Check whether the following values are matching for "GET Request"
      | stream.provider | mxplay  |
      | type            | episode |

  @times
  Scenario: Show Details Page - Meta Screen - To test TV Show Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint              | FileName                  | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/detail/collection | DetailsFlowGetRequest.txt | json         |    4 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | duration      |
      | title         |
      | releaseDate   |
      | tabs[0].title |
      #| tabs[0].style          |
      | tabs[0].type  |
      | tabs[0].api   |
    Then Check whether the following values are matching for "GET Request"
      # stream.provider | mxplay  |
      | type | tvshow |

  @times
  Scenario: Show Details Page - Meta Screen - To test Season Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint              | FileName                  | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/detail/collection | DetailsFlowGetRequest.txt | json         |    5 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | duration        |
      | title           |
      | releaseDate     |
      | container.title |
    Then Check whether the following values are matching for "GET Request"
      #| stream.provider | mxplay  |
      | type | season |

  @times
  Scenario: Album Details Page - Meta Screen - To test Album Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint              | FileName                  | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/detail/collection | DetailsFlowGetRequest.txt | json         |    6 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | duration             |
      | title                |
      | releaseDate          |
      | tabs[0].title        |
      | tabs[0].type         |
      | tabs[0].api          |
      | contributors[0].name |
      | contributors[0].type |
      | contributors[0].id   |
    Then Check whether the following values are matching for "GET Request"
      #| stream.provider | mxplay  |
      | type | album |

  @times
  Scenario: Publisher - Publisher Screen - To test Publisher Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint              | FileName                  | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/detail/collection | DetailsFlowGetRequest.txt | json         |    7 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | duration             |
      | title                |
      | releaseDate          |
      | tabs[0].title        |
      | tabs[0].type         |
      | tabs[0].api          |
      | contributors[0].name |
      | contributors[0].type |
      | contributors[0].id   |
    Then Check whether the following values are matching for "GET Request"
      | type | album |
