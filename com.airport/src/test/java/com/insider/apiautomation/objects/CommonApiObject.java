package com.insider.apiautomation.objects;
import com.insider.apiautomation.requestalgorithms.GetRequest;
import com.insider.apiautomation.utils.LogUtils;
import io.restassured.response.Response;
import net.serenitybdd.core.Serenity;
import net.thucydides.core.annotations.Step;

public class CommonApiObject {

	public Response getRequestResponse;


	@Step("Verifying GET Request Status Code")
	public void verifyGetRequestStatusCodeNew(int responseCode,String contentType, String url) {

		LogUtils.info("Invoking the genericGet method to get the response");
				
		getRequestResponse = GetRequest.sendRequest(responseCode, contentType, url);

		Serenity.setSessionVariable("getRequestResponse").to(getRequestResponse);

	}


}
