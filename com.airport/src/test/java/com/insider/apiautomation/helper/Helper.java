package com.insider.apiautomation.helper;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import com.insider.apiautomation.genericmethods.Constants;
import com.insider.apiautomation.utils.LogUtils;
import cucumber.api.DataTable;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

public class Helper {

	public static String getParamAppendUrl(String baseUrl, String url, String parameters) {

		try {

			LogUtils.info("Concating the Url");
			LogUtils.info("The base Url is " + baseUrl);
			LogUtils.info("The Url is " + url);

			LogUtils.info(baseUrl.concat(url).concat(parameters));
			return baseUrl.concat(url).concat(parameters);

		} catch (Exception e) {

			LogUtils.error("Failed to append the Url | Class:Helper | method:getParamAppendUrl " + e.getMessage());

		}

		return "";

	}

	public static String getData(String fileName, int data) {

		try {

			LogUtils.info("Returning the data from " + fileName + "from the row " + data);

			return Files.readAllLines(Paths.get(fileName)).get(data);

		} catch (Exception e) {

			LogUtils.error("Failed to return the data | Class:Helper | method:getData " + e.getMessage());

		}
		return null;

	}

	public static String getAllData(String fileName) {

		try {

			LogUtils.info("Reading the data from the file " + fileName);
			return new String(Files.readAllBytes(Paths.get(fileName)));

		} catch (Exception e) {

			LogUtils.error("Failed to read the data from the file| Class:Helper | method:getAllData " + e.getMessage());

		}
		return "";

	}

	public static String getFileName(DataTable filePoints) {
		try {

			String fileName = Constants.getFile + "/" + getDataFromTable(filePoints, 1, 1);
			LogUtils.info("The fileName of Get Request Data is " + fileName);

			return fileName;
		} catch (Exception e) {

			LogUtils.error("Failed to return the file name of GET Request Data | method:getFileName | Class:Helper "
					+ e.getMessage());
		}

		return null;
	}

	public static String[] getFileData(DataTable filePoints, int data) {

		try {

			LogUtils.info("Spliting the data of GET  Request");

			return getData(getFileName(filePoints), data).split("===");

		} catch (Exception e) {

			LogUtils.error(
					"Failed to Return the data of GET Request | method:getFileData | Class:Helper " + e.getMessage());
		}

		return null;

	}

	public static String getDataFromTable(DataTable table, int rowNum, int colNum) {

		try {

			LogUtils.info("Returning the value from Cucumber Table");
			List<List<String>> data = table.raw();

			return data.get(rowNum).get(colNum);

		} catch (Exception e) {

			LogUtils.error("Failed to return the value from Cucumber Table | Class:Helper | Method:getDataFromTable "
					+ e.getMessage());
		}

		return "";

	}

	public static List<String> genericListValues(Response res, String jsonPath) {
		try {
			LogUtils.info("Returning the value of particular key from the Json response ");

			if (jsonPath.contains("find")) {

				List<String> jsonPathValues = res.path(jsonPath);

				return jsonPathValues;

			}

		} catch (Exception e) {

			LogUtils.error("Failed the return the value from Json Response | "
					+ "Class:Helper | Method:genericListValues " + e.getMessage());
		}

		return null;
	}

	public static String getContentType(DataTable filePoints) {
		try {
			String contentType;

			if (getDataFromTable(filePoints, 1, 2).equalsIgnoreCase("Json")) {
				contentType = ContentType.JSON.toString();
			} else if (getDataFromTable(filePoints, 1, 2).equalsIgnoreCase("Html")) {

				contentType = ContentType.HTML.toString();
			} else if (getDataFromTable(filePoints, 1, 2).equalsIgnoreCase("text")) {

				contentType = ContentType.TEXT.toString();
			} else if (getDataFromTable(filePoints, 1, 2).equalsIgnoreCase("Urlencoded")) {

				contentType = ContentType.URLENC.toString();

			} else if (getDataFromTable(filePoints, 1, 2).equals("Xml")) {

				contentType = ContentType.XML.toString();

			} else if (getDataFromTable(filePoints, 1, 2).equals("xml")) {

				contentType = "text/xml";

			} else if (getDataFromTable(filePoints, 1, 2).equals("plain")) {

				contentType = "text/plain";

			} else if (getDataFromTable(filePoints, 1, 2).equalsIgnoreCase("Pdf")) {

				contentType = "application/pdf";

			}

			else {

				contentType = "";
			}

			return contentType;

		} catch (Exception e) {

			LogUtils.info("Failed to return the ContentType | Class:Helper | Method:setContentType " + e.getMessage());
		}

		return null;
	}

	public static String getFeatureName(String featureFileName) {

		try {

			File featureFilePath = new File(featureFileName);
			return featureFilePath.getName();

		} catch (Exception e) {

			LogUtils.error(
					"Failed to return the Feature Name | Class:Helper | Method:getFeatureName " + e.getMessage());
		}

		return null;
	}

	public static Integer convertStringToInt(String stringValue) {

		try {

			return Integer.parseInt(stringValue.toString());

		} catch (Exception e) {

			LogUtils.error("Failed to return the Integer | Class:Helper | Method:convertStringToInt " + e.getMessage());
		}

		return null;
	}

}
