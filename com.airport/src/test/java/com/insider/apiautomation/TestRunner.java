package com.insider.apiautomation;

import java.io.IOException;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import com.insider.apiautomation.genericmethods.GenericMethods;
import com.insider.apiautomation.utils.LogUtils;

import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;


@RunWith(CucumberWithSerenity.class)
@CucumberOptions(features="src/test/resources/features",format={"json:target/cucumber.json","html:target/site/cucumber-pretty"},glue="com.insider.apiautomation.definitions", tags= {"not @ignore"})
public class TestRunner  {
	
   @BeforeClass
	public static void  beforeSetup()  throws Exception  {
	  
	   System.out.println("Setting up log");
	   GenericMethods.setLogger();
	   LogUtils.info("Invoking setApiObject of CommonApiObjectSetup");
			
   }   
   
   @AfterClass

   public static void shutDown() throws IOException  {
     
     
       
   }
   
	
}
