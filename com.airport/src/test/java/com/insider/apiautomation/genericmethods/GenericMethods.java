package com.insider.apiautomation.genericmethods;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.Properties;
import org.apache.log4j.PropertyConfigurator;

import com.insider.apiautomation.utils.LogUtils;

public class GenericMethods {


	public static void setLogger() {

		try {
			Properties po1 = new Properties();
			FileInputStream configStream1 = new FileInputStream(Constants.Path_Log4jConfiguraton);
			po1.load(configStream1);
			PropertyConfigurator.configure(Constants.Path_Log4jConfiguraton);
			String logFolderPath = Constants.Path_LogFolder;
			po1.setProperty("log4j.appender.file.File", logFolderPath);
			FileOutputStream output1 = new FileOutputStream(Constants.Path_Log4jConfiguraton);
			po1.store(output1, null);
			configStream1.close();
			output1.close();

		} catch (Exception e) {

			LogUtils.info("Failed to set Logger " + e.getMessage());
		}
	}

}