$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/ashwin/Documents/work/projects/MxApiAutomation/com.airport/src/test/resources/features/TimesExample/AllScreenPagination.feature");
formatter.feature({
  "name": "To Test the All Screen Pagination-Styles Api",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To All Screen Pagination Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/home/tab/1",
        "AllScreenPaginationGetRequest.txt",
        "json",
        "0",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "sections[0].id"
      ]
    },
    {
      "cells": [
        "sections[0].style"
      ]
    },
    {
      "cells": [
        "sections[0].items[0].duration"
      ]
    },
    {
      "cells": [
        "sections[0].items[0].title"
      ]
    },
    {
      "cells": [
        "sections[0].items[0].releaseDate"
      ]
    },
    {
      "cells": [
        "next"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To test Styles Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/home/tab/1",
        "AllScreenPaginationGetRequest.txt",
        "json",
        "1",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "sections[0].id"
      ]
    },
    {
      "cells": [
        "sections[0].style"
      ]
    },
    {
      "cells": [
        "sections[0].items[0].duration"
      ]
    },
    {
      "cells": [
        "sections[0].items[0].title"
      ]
    },
    {
      "cells": [
        "sections[0].items[0].releaseDate"
      ]
    },
    {
      "cells": [
        "next"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("/Users/ashwin/Documents/work/projects/MxApiAutomation/com.airport/src/test/resources/features/TimesExample/DetailsPageFlow.feature");
formatter.feature({
  "name": "To Test the Details Module Api",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Meta info \u0026 Playback Screen - Music Feature - To test home Music Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/detail/video",
        "DetailsFlowGetRequest.txt",
        "json",
        "0",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "duration"
      ]
    },
    {
      "cells": [
        "title"
      ]
    },
    {
      "cells": [
        "releaseDate"
      ]
    },
    {
      "cells": [
        "contributors[0].name"
      ]
    },
    {
      "cells": [
        "contributors[0].type"
      ]
    },
    {
      "cells": [
        "tabs[0].title"
      ]
    },
    {
      "cells": [
        "tabs[0].type"
      ]
    },
    {
      "cells": [
        "tabs[0].api"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are matching for \"GET Request\"",
  "rows": [
    {
      "cells": [
        "stream.provider",
        "mxplay"
      ]
    },
    {
      "cells": [
        "type",
        "music"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_matching(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Meta info \u0026 Playback Screen - Movie Feature - To test home Movie Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/detail/video",
        "DetailsFlowGetRequest.txt",
        "json",
        "1",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "duration"
      ]
    },
    {
      "cells": [
        "title"
      ]
    },
    {
      "cells": [
        "releaseDate"
      ]
    },
    {
      "cells": [
        "contributors[0].name"
      ]
    },
    {
      "cells": [
        "contributors[0].type"
      ]
    },
    {
      "cells": [
        "contributors[0].id"
      ]
    },
    {
      "cells": [
        "tabs[0].title"
      ]
    },
    {
      "cells": [
        "tabs[0].type"
      ]
    },
    {
      "cells": [
        "tabs[0].api"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are matching for \"GET Request\"",
  "rows": [
    {
      "cells": [
        "stream.provider",
        "mxplay"
      ]
    },
    {
      "cells": [
        "type",
        "movie"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_matching(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Meta info \u0026 Playback Screen - Shorts Feature - To test Videos Shorts Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/detail/video",
        "DetailsFlowGetRequest.txt",
        "json",
        "2",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "duration"
      ]
    },
    {
      "cells": [
        "title"
      ]
    },
    {
      "cells": [
        "releaseDate"
      ]
    },
    {
      "cells": [
        "tabs[0].title"
      ]
    },
    {
      "cells": [
        "tabs[0].type"
      ]
    },
    {
      "cells": [
        "tabs[0].api"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are matching for \"GET Request\"",
  "rows": [
    {
      "cells": [
        "stream.provider",
        "mxplay"
      ]
    },
    {
      "cells": [
        "type",
        "shorts"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_matching(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Meta info \u0026 Playback Screen - Episodes Feature - To test Videos Episodes Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/detail/video",
        "DetailsFlowGetRequest.txt",
        "json",
        "3",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "duration"
      ]
    },
    {
      "cells": [
        "title"
      ]
    },
    {
      "cells": [
        "releaseDate"
      ]
    },
    {
      "cells": [
        "tabs[0].title"
      ]
    },
    {
      "cells": [
        "tabs[0].type"
      ]
    },
    {
      "cells": [
        "tabs[0].api"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are matching for \"GET Request\"",
  "rows": [
    {
      "cells": [
        "stream.provider",
        "mxplay"
      ]
    },
    {
      "cells": [
        "type",
        "episode"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_matching(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Show Details Page - Meta Screen - To test TV Show Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/detail/collection",
        "DetailsFlowGetRequest.txt",
        "json",
        "4",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "duration"
      ]
    },
    {
      "cells": [
        "title"
      ]
    },
    {
      "cells": [
        "releaseDate"
      ]
    },
    {
      "cells": [
        "tabs[0].title"
      ]
    },
    {
      "cells": [
        "tabs[0].type"
      ]
    },
    {
      "cells": [
        "tabs[0].api"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are matching for \"GET Request\"",
  "rows": [
    {
      "cells": [
        "type",
        "tvshow"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_matching(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Show Details Page - Meta Screen - To test Season Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/detail/collection",
        "DetailsFlowGetRequest.txt",
        "json",
        "5",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "duration"
      ]
    },
    {
      "cells": [
        "title"
      ]
    },
    {
      "cells": [
        "releaseDate"
      ]
    },
    {
      "cells": [
        "container.title"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are matching for \"GET Request\"",
  "rows": [
    {
      "cells": [
        "type",
        "season"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_matching(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Album Details Page - Meta Screen - To test Album Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/detail/collection",
        "DetailsFlowGetRequest.txt",
        "json",
        "6",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "duration"
      ]
    },
    {
      "cells": [
        "title"
      ]
    },
    {
      "cells": [
        "releaseDate"
      ]
    },
    {
      "cells": [
        "tabs[0].title"
      ]
    },
    {
      "cells": [
        "tabs[0].type"
      ]
    },
    {
      "cells": [
        "tabs[0].api"
      ]
    },
    {
      "cells": [
        "contributors[0].name"
      ]
    },
    {
      "cells": [
        "contributors[0].type"
      ]
    },
    {
      "cells": [
        "contributors[0].id"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are matching for \"GET Request\"",
  "rows": [
    {
      "cells": [
        "type",
        "album"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_matching(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Publisher - Publisher Screen - To test Publisher Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/detail/collection",
        "DetailsFlowGetRequest.txt",
        "json",
        "7",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "duration"
      ]
    },
    {
      "cells": [
        "title"
      ]
    },
    {
      "cells": [
        "releaseDate"
      ]
    },
    {
      "cells": [
        "tabs[0].title"
      ]
    },
    {
      "cells": [
        "tabs[0].type"
      ]
    },
    {
      "cells": [
        "tabs[0].api"
      ]
    },
    {
      "cells": [
        "contributors[0].name"
      ]
    },
    {
      "cells": [
        "contributors[0].type"
      ]
    },
    {
      "cells": [
        "contributors[0].id"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are matching for \"GET Request\"",
  "rows": [
    {
      "cells": [
        "type",
        "album"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_matching(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("/Users/ashwin/Documents/work/projects/MxApiAutomation/com.airport/src/test/resources/features/TimesExample/HomeModuleFlow.feature");
formatter.feature({
  "name": "To Test the Home Module Api.",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Home Screen - To test home tab Api.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.step({
  "name": "Check whether the get request status code \u003cResponse Code\u003e is correct having \u003cData\u003e",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/home/tabs",
        "HomeModuleFlowGetRequest.txt",
        "json",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ]
});
formatter.step({
  "name": "Check whether the following values are matching for \"GET Request\"",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "tabs[0].title",
        "HOME"
      ]
    },
    {
      "cells": [
        "tabs[1].title",
        "BUZZ"
      ]
    },
    {
      "cells": [
        "tabs[2].title",
        "MUSIC"
      ]
    },
    {
      "cells": [
        "tabs[3].title",
        "SHOWS"
      ]
    },
    {
      "cells": [
        "tabs[4].title",
        "MOVIE"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Data",
        "Response Code"
      ]
    },
    {
      "cells": [
        "0",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Home Screen - To test home tab Api.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code 200 is correct having 0",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/home/tabs",
        "HomeModuleFlowGetRequest.txt",
        "json",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct_having(int,int,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are matching for \"GET Request\"",
  "rows": [
    {
      "cells": [
        "tabs[0].title",
        "HOME"
      ]
    },
    {
      "cells": [
        "tabs[1].title",
        "BUZZ"
      ]
    },
    {
      "cells": [
        "tabs[2].title",
        "MUSIC"
      ]
    },
    {
      "cells": [
        "tabs[3].title",
        "SHOWS"
      ]
    },
    {
      "cells": [
        "tabs[4].title",
        "MOVIE"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_matching(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Home Screen - To test home listing Apis.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/home/tab/1",
        "HomeModuleFlowGetRequest.txt",
        "json",
        "0",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "sections[0].id"
      ]
    },
    {
      "cells": [
        "sections[0].next"
      ]
    },
    {
      "cells": [
        "sections[0].items[0].title"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/home/tab/1",
        "HomeModuleFlowGetRequest.txt",
        "json",
        "1",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "sections[0].id"
      ]
    },
    {
      "cells": [
        "sections[0].next"
      ]
    },
    {
      "cells": [
        "sections[0].items[0].title"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Home Screen - To test home Carousel Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/home/banners/1",
        "HomeModuleFlowGetRequest.txt",
        "json",
        "0",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "banners[0].subTitle"
      ]
    },
    {
      "cells": [
        "banners[0].id"
      ]
    },
    {
      "cells": [
        "banners[0].title"
      ]
    },
    {
      "cells": [
        "banners[0].type"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Buzz Screen - To test Category pills Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/home/tab/2",
        "HomeModuleFlowGetRequest.txt",
        "json",
        "0",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "sections[0].id"
      ]
    },
    {
      "cells": [
        "sections[0].style"
      ]
    },
    {
      "cells": [
        "sections[0].items[0].title"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Buzz Screen - To test Feed (based on the category selection) Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/home/banners/2",
        "HomeModuleFlowGetRequest.txt",
        "json",
        "0",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "banners"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Buzz Screen - To test listing Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/home/tab/2",
        "HomeModuleFlowGetRequest.txt",
        "json",
        "0",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "sections[0].id"
      ]
    },
    {
      "cells": [
        "sections[0].style"
      ]
    },
    {
      "cells": [
        "sections[0].items[0].title"
      ]
    },
    {
      "cells": [
        "sections[0].items[0].releaseDate"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Music Screen - To test Carousel Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/home/banners/3",
        "HomeModuleFlowGetRequest.txt",
        "json",
        "0",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "banners"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Music Screen - To test Listing Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/home/tab/3",
        "HomeModuleFlowGetRequest.txt",
        "json",
        "0",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "sections[0].id"
      ]
    },
    {
      "cells": [
        "sections[0].style"
      ]
    },
    {
      "cells": [
        "sections[0].items[0].title"
      ]
    },
    {
      "cells": [
        "sections[0].items[0].releaseDate"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Shows Screen - To test Carousel Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/home/banners/5",
        "HomeModuleFlowGetRequest.txt",
        "json",
        "0",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "banners[0].subTitle"
      ]
    },
    {
      "cells": [
        "banners[0].id"
      ]
    },
    {
      "cells": [
        "banners[0].title"
      ]
    },
    {
      "cells": [
        "banners[0].type"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Shows Screen - To test Listing Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/home/tab/5",
        "HomeModuleFlowGetRequest.txt",
        "json",
        "0",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "sections[0].id"
      ]
    },
    {
      "cells": [
        "sections[0].style"
      ]
    },
    {
      "cells": [
        "sections[0].items[0].title"
      ]
    },
    {
      "cells": [
        "sections[0].items[0].releaseDate"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Movies Screen - To test Carousel Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/home/banners/6",
        "HomeModuleFlowGetRequest.txt",
        "json",
        "0",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "banners[0].subTitle"
      ]
    },
    {
      "cells": [
        "banners[0].id"
      ]
    },
    {
      "cells": [
        "banners[0].title"
      ]
    },
    {
      "cells": [
        "banners[0].type"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Movies Screen - To test Listing Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/home/tab/6",
        "HomeModuleFlowGetRequest.txt",
        "json",
        "0",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "sections[0].id"
      ]
    },
    {
      "cells": [
        "sections[0].style"
      ]
    },
    {
      "cells": [
        "sections[0].items[0].title"
      ]
    },
    {
      "cells": [
        "sections[0].items[0].releaseDate"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Times Flow - To test video details api with different data.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.step({
  "name": "Check whether the get request status code \u003cResponse Code\u003e is correct having \u003cData\u003e",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/detail/video",
        "TimesFlowGetRequest.txt",
        "json",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ]
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "title"
      ]
    }
  ]
});
formatter.step({
  "name": "Check whether the following values are matching for \"GET Request\"",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "tabs[0].title",
        "MORE SONGS"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Data",
        "Response Code"
      ]
    },
    {
      "cells": [
        "1",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Times Flow - To test video details api with different data.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code 200 is correct having 1",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/detail/video",
        "TimesFlowGetRequest.txt",
        "json",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct_having(int,int,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "title"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are matching for \"GET Request\"",
  "rows": [
    {
      "cells": [
        "tabs[0].title",
        "MORE SONGS"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_matching(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("/Users/ashwin/Documents/work/projects/MxApiAutomation/com.airport/src/test/resources/features/TimesExample/LiveTV.feature");
formatter.feature({
  "name": "To Test the Live TV Module Apis",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Player Screen - Music Feature - To test Player support for Live and DVR Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/detail/collection",
        "LiveTV.txt",
        "json",
        "0",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "duration"
      ]
    },
    {
      "cells": [
        "title"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are matching for \"GET Request\"",
  "rows": [
    {
      "cells": [
        "stream.provider",
        "mxplay"
      ]
    },
    {
      "cells": [
        "type",
        "liveChannel"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_matching(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("/Users/ashwin/Documents/work/projects/MxApiAutomation/com.airport/src/test/resources/features/TimesExample/MusicModule.feature");
formatter.feature({
  "name": "To Test the Music Module Apis",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Detail Screen - To test contributor values-Artist  Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/detail/creator",
        "MusicModule.txt",
        "json",
        "0",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "type"
      ]
    },
    {
      "cells": [
        "videoCount"
      ]
    },
    {
      "cells": [
        "sections[1].next"
      ]
    },
    {
      "cells": [
        "sections[1].name"
      ]
    },
    {
      "cells": [
        "sections[1].items[0].duration"
      ]
    },
    {
      "cells": [
        "sections[1].items[0].title"
      ]
    },
    {
      "cells": [
        "sections[1].items[0].releaseDate"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are matching for \"GET Request\"",
  "rows": [
    {
      "cells": [
        "type",
        "artist"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_matching(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("/Users/ashwin/Documents/work/projects/MxApiAutomation/com.airport/src/test/resources/features/TimesExample/PaginationRecommendation.feature");
formatter.feature({
  "name": "To Test the Pagination Recommendation Module Apis",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Movies - To Test Movie Recommend Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/detail/tab/movierecommended",
        "PaginationRecommendation.txt",
        "json",
        "0",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "id"
      ]
    },
    {
      "cells": [
        "style"
      ]
    },
    {
      "cells": [
        "items[0].duration"
      ]
    },
    {
      "cells": [
        "items[0].title"
      ]
    },
    {
      "cells": [
        "items[0].releaseDate"
      ]
    },
    {
      "cells": [
        "next"
      ]
    },
    {
      "cells": [
        "name"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are matching for \"GET Request\"",
  "rows": [
    {
      "cells": [
        "items[0].stream.provider",
        "mxplay"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_matching(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Short Videos - To Test Watch Next Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/detail/tab/shortvideowatchnext",
        "PaginationRecommendation.txt",
        "json",
        "2",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "id"
      ]
    },
    {
      "cells": [
        "style"
      ]
    },
    {
      "cells": [
        "items[0].duration"
      ]
    },
    {
      "cells": [
        "items[0].title"
      ]
    },
    {
      "cells": [
        "items[0].releaseDate"
      ]
    },
    {
      "cells": [
        "next"
      ]
    },
    {
      "cells": [
        "name"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are matching for \"GET Request\"",
  "rows": [
    {
      "cells": [
        "items[0].stream.provider",
        "mxplay"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_matching(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Short Videos - To Test Short Related Videos Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/detail/tab/shortvideorelatedvideos",
        "PaginationRecommendation.txt",
        "json",
        "1",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "id"
      ]
    },
    {
      "cells": [
        "style"
      ]
    },
    {
      "cells": [
        "items[0].duration"
      ]
    },
    {
      "cells": [
        "items[0].title"
      ]
    },
    {
      "cells": [
        "items[0].releaseDate"
      ]
    },
    {
      "cells": [
        "next"
      ]
    },
    {
      "cells": [
        "name"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are matching for \"GET Request\"",
  "rows": [
    {
      "cells": [
        "items[0].stream.provider",
        "mxplay"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_matching(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("/Users/ashwin/Documents/work/projects/MxApiAutomation/com.airport/src/test/resources/features/TimesExample/Recommendation.feature");
formatter.feature({
  "name": "To Test the Recommendation Module Apis",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Short Videos - To Test Short Videos Watch Next Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/detail/tab/shortvideowatchnext",
        "RecommendationGetRequest.txt",
        "json",
        "0",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "id"
      ]
    },
    {
      "cells": [
        "style"
      ]
    },
    {
      "cells": [
        "items[0].duration"
      ]
    },
    {
      "cells": [
        "items[0].title"
      ]
    },
    {
      "cells": [
        "items[0].releaseDate"
      ]
    },
    {
      "cells": [
        "next"
      ]
    },
    {
      "cells": [
        "name"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are matching for \"GET Request\"",
  "rows": [
    {
      "cells": [
        "items[0].stream.provider",
        "mxplay"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_matching(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Movies - To Test Movie recommended Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/detail/tab/movierecommended",
        "RecommendationGetRequest.txt",
        "json",
        "2",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "id"
      ]
    },
    {
      "cells": [
        "style"
      ]
    },
    {
      "cells": [
        "name"
      ]
    },
    {
      "cells": [
        "items[0].duration"
      ]
    },
    {
      "cells": [
        "items[0].title"
      ]
    },
    {
      "cells": [
        "items[0].releaseDate"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are matching for \"GET Request\"",
  "rows": [
    {
      "cells": [
        "items[0].stream.provider",
        "mxplay"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_matching(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Movies - To Test Movie Related Clips Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/detail/tab/movierelated_clips",
        "RecommendationGetRequest.txt",
        "json",
        "3",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "id"
      ]
    },
    {
      "cells": [
        "style"
      ]
    },
    {
      "cells": [
        "items[0].duration"
      ]
    },
    {
      "cells": [
        "items[0].title"
      ]
    },
    {
      "cells": [
        "items[0].releaseDate"
      ]
    },
    {
      "cells": [
        "next"
      ]
    },
    {
      "cells": [
        "name"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are matching for \"GET Request\"",
  "rows": [
    {
      "cells": [
        "items[0].stream.provider",
        "mxplay"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_matching(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TV Show - To Test TV Show Episodes Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/detail/tab/tvshowepisodes",
        "RecommendationGetRequest.txt",
        "json",
        "4",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "id"
      ]
    },
    {
      "cells": [
        "style"
      ]
    },
    {
      "cells": [
        "items[0].duration"
      ]
    },
    {
      "cells": [
        "items[0].title"
      ]
    },
    {
      "cells": [
        "items[0].releaseDate"
      ]
    },
    {
      "cells": [
        "next"
      ]
    },
    {
      "cells": [
        "name"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are matching for \"GET Request\"",
  "rows": [
    {
      "cells": [
        "items[0].stream.provider",
        "mxplay"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_matching(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("/Users/ashwin/Documents/work/projects/MxApiAutomation/com.airport/src/test/resources/features/TimesExample/SearchResults.feature");
formatter.feature({
  "name": "To Test the Search Results Api",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To Test Search Results Query Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/search/result",
        "SearchResultsGetRequest.txt",
        "json",
        "1",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "sections[0].id"
      ]
    },
    {
      "cells": [
        "sections[0].style"
      ]
    },
    {
      "cells": [
        "sections[0].items[0].title"
      ]
    },
    {
      "cells": [
        "sections[0].items[0].releaseDate"
      ]
    },
    {
      "cells": [
        "sections[0].items[0].type"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Test Search Results Trending Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/search/trending",
        "SearchResultsGetRequest.txt",
        "json",
        "0",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "[0].query"
      ]
    },
    {
      "cells": [
        "[0].exact_query"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Test Search Suggestion Api.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@times"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the get request status code Response Code is correct having Data",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "FileName",
        "Content Type",
        "Data",
        "Response Code",
        "UserID",
        "Platform"
      ]
    },
    {
      "cells": [
        "/v1/search/suggest",
        "SearchResultsGetRequest.txt",
        "json",
        "2",
        "200",
        "ABC",
        "com.mxplay.iOSPlayer"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_get_request_status_code_is_correct(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check whether the following values are not null for \"GET Request\" using jsonpath",
  "rows": [
    {
      "cells": [
        "[0].query"
      ]
    },
    {
      "cells": [
        "[0].exact_query"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonApiObjectDefintion.check_whether_the_following_values_are_not_null(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
});