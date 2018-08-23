package com.insider.apiautomation.definitions;

import com.insider.apiautomation.factories.SetBaseUrlFactory;
import com.insider.apiautomation.helper.Helper;
import com.insider.apiautomation.utils.LogUtils;
import cucumber.api.Scenario;
import cucumber.api.java.Before;


public class Hooks {

	public static Scenario scenario;
	public static String featureName;

	@Before
	public void before(Scenario scenario) {
		this.scenario = scenario;
		featureName = scenario.getId().split(";")[0].replace("-", " ");
		featureName = Helper.getFeatureName(featureName).replaceAll(":\\d+", "");
	}
	

	@Before("@insider")
	public void beforeFeatureTimes(Scenario scenario) {

		LogUtils.info("Invoked the before hook for Insider");
		LogUtils.info(System.getProperty("environment"));
		SetBaseUrlFactory.setBaseUrl(System.getProperty("environment"), "insider");

	}


}
