Feature: To Test the Home Module Api.

  @times
  Scenario Outline: Home Screen - To test home tab Api.
    Then Check whether the get request status code <Response Code> is correct having <Data>
      | EndPoint      | FileName                     | Content Type | UserID | Platform             |
      | /v1/home/tabs | HomeModuleFlowGetRequest.txt | json         | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are matching for "GET Request"
      | tabs[0].title | HOME  |
      | tabs[1].title | BUZZ  |
      | tabs[2].title | MUSIC |
      | tabs[3].title | SHOWS |
      | tabs[4].title | MOVIE |

    Examples: 
      | Data | Response Code |
      #No query parameter required
      |    0 |           200 |

  @times
  Scenario: Home Screen - To test home listing Apis.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint       | FileName                     | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/home/tab/1 | HomeModuleFlowGetRequest.txt | json         |    0 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | sections[0].id             |
      | sections[0].next           |
      | sections[0].items[0].title |
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint       | FileName                     | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/home/tab/1 | HomeModuleFlowGetRequest.txt | json         |    1 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | sections[0].id             |
      | sections[0].next           |
      | sections[0].items[0].title |

  @times
  Scenario: Home Screen - To test home Carousel Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint           | FileName                     | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/home/banners/1 | HomeModuleFlowGetRequest.txt | json         |    0 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | banners[0].subTitle |
      | banners[0].id       |
      | banners[0].title    |
      | banners[0].type     |

  @times
  Scenario: Buzz Screen - To test Category pills Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint       | FileName                     | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/home/tab/2 | HomeModuleFlowGetRequest.txt | json         |    0 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | sections[0].id                   |
      | sections[0].style                |
      | sections[0].items[0].title       |
      #| sections[0].items[0].publishTime |

  @times
  Scenario: Buzz Screen - To test Feed (based on the category selection) Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint           | FileName                     | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/home/banners/2 | HomeModuleFlowGetRequest.txt | json         |    0 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | banners |

  @times
  Scenario: Buzz Screen - To test listing Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint       | FileName                     | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/home/tab/2 | HomeModuleFlowGetRequest.txt | json         |    0 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | sections[0].id                   |
      | sections[0].style                |
      | sections[0].items[0].title       |
      | sections[0].items[0].releaseDate |

  @times
  Scenario: Music Screen - To test Carousel Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint           | FileName                     | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/home/banners/3 | HomeModuleFlowGetRequest.txt | json         |    0 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | banners |

  @times
  Scenario: Music Screen - To test Listing Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint       | FileName                     | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/home/tab/3 | HomeModuleFlowGetRequest.txt | json         |    0 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | sections[0].id                   |
      | sections[0].style                |
      | sections[0].items[0].title       |
      | sections[0].items[0].releaseDate |

  @times
  Scenario: Shows Screen - To test Carousel Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint           | FileName                     | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/home/banners/5 | HomeModuleFlowGetRequest.txt | json         |    0 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | banners[0].subTitle |
      | banners[0].id       |
      | banners[0].title    |
      | banners[0].type     |

  @times
  Scenario: Shows Screen - To test Listing Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint       | FileName                     | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/home/tab/5 | HomeModuleFlowGetRequest.txt | json         |    0 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | sections[0].id                   |
      | sections[0].style                |
      | sections[0].items[0].title       |
      | sections[0].items[0].releaseDate |

  @times
  Scenario: Movies Screen - To test Carousel Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint           | FileName                     | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/home/banners/6 | HomeModuleFlowGetRequest.txt | json         |    0 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | banners[0].subTitle |
      | banners[0].id       |
      | banners[0].title    |
      | banners[0].type     |

  @times
  Scenario: Movies Screen - To test Listing Api.
    Then Check whether the get request status code Response Code is correct having Data
      | EndPoint       | FileName                     | Content Type | Data | Response Code | UserID | Platform             |
      | /v1/home/tab/6 | HomeModuleFlowGetRequest.txt | json         |    0 |           200 | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | sections[0].id                   |
      | sections[0].style                |
      | sections[0].items[0].title       |
      | sections[0].items[0].releaseDate |

  @times
  Scenario Outline: Times Flow - To test video details api with different data.
    Then Check whether the get request status code <Response Code> is correct having <Data>
      | EndPoint         | FileName                | Content Type | UserID | Platform             |
      | /v1/detail/video | TimesFlowGetRequest.txt | json         | ABC    | com.mxplay.iOSPlayer |
    Then Check whether the following values are not null for "GET Request" using jsonpath
      | title |
    Then Check whether the following values are matching for "GET Request"
      | tabs[0].title | MORE SONGS    |

    Examples: 
      | Data | Response Code |
      #Music Video
      |    1 |           200 |