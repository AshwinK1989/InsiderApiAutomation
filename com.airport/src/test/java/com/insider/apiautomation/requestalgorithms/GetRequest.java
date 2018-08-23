package com.insider.apiautomation.requestalgorithms;

import com.insider.apiautomation.utils.LogUtils;

import io.restassured.response.Response;
import net.serenitybdd.rest.SerenityRest;

public class GetRequest {

	public static Response sendRequest(int responseCode, String contentType, String url) {

		Response getResponse = null;

		LogUtils.info("The Url is " + url);

		getResponse = genericGet(responseCode, contentType, url);

		return getResponse;
	}

	public static Response genericGet(int responseCode, String contentType, String url) {

		try {

			Response getResponseWithoutCookies = SerenityRest.rest().given().relaxedHTTPSValidation().when()
					.contentType(contentType).get(url).then().assertThat().contentType(contentType)
					.statusCode(responseCode).extract().response();

			LogUtils.info("The response of Get Requestis " + getResponseWithoutCookies.asString());

			return getResponseWithoutCookies;

		} catch (Exception e) {

			LogUtils.error("Failed to return the response of GET Request | Class:GetRequest" + "| Method: genericGet "
					+ e.getMessage());
		}

		return null;
	}

}
