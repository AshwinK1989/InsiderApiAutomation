package com.insider.apiautomation.genericmethods;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Constants {
	
	
	public static String baseUrl;	
	public static final String getFile = System.getProperty("user.dir")+"/src/test/resources/JsonFiles/GetRequestData";
		
	public static final String Path_Log4jConfiguraton="Log4jConfiguration/log4j.properties";
	public static final String Path_LogFolder=System.getProperty("user.dir") + "/" + "Logs_"+new SimpleDateFormat ("yyyy-MM-dd HH-mm-ss").format (new Date ())+"/log.txt";
		
	

}
