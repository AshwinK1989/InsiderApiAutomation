package com.insider.apiautomation.definitions;

import static org.hamcrest.Matchers.lessThan;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import com.insider.apiautomation.helper.Helper;
import com.insider.apiautomation.objects.CommonApiObject;
import com.insider.apiautomation.setrequestdata.SetRequestData;
import com.insider.apiautomation.utils.LogUtils;
import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import io.restassured.response.Response;
import net.serenitybdd.core.Serenity;
import net.thucydides.core.annotations.Steps;

public class CommonApiObjectDefintion {

	@Steps
	CommonApiObject cao;

	SetRequestData srd;

	@Then("^Check whether the get request status code is correct having Data$")
	public void check_whether_the_get_request_status_code_is_correct(DataTable filePoints) {

		LogUtils.info("Invoking the method verifyGetRequestStatusCode");
		srd = new SetRequestData(filePoints);
		cao.verifyGetRequestStatusCodeNew(srd.getExpectedStatusCode(), srd.getContentType(), srd.getUrl());

	}

	@Then("^Print the list of \"([^\"]*)\" for \"([^\"]*)\"$")
	public void printListOfValues(String detail, String jsonPath) {

		LogUtils.info("The List of " + detail
				+ Helper.genericListValues(Serenity.sessionVariableCalled("getRequestResponse"), jsonPath));

	}

	@Then("^Verify \"([^\"]*)\" is less than (\\d+)$")
	public void verify_response_time_is_less_than(String header, int responseTime) throws Exception {

		Response res = Serenity.sessionVariableCalled("getRequestResponse");
		assertThat(Helper.convertStringToInt(res.getHeader(header)), is(lessThan(responseTime)));

	}

}
