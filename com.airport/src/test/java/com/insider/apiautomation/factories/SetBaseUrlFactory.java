package com.insider.apiautomation.factories;

import com.insider.apiautomation.genericmethods.Constants;

public class SetBaseUrlFactory {

	public static String setBaseUrl(String env, String project) {

		if (env.equalsIgnoreCase("prod") && project.equals("insider")) {

			Constants.baseUrl = "https://api.insider.in";

		} 

		return Constants.baseUrl;
	}

}
