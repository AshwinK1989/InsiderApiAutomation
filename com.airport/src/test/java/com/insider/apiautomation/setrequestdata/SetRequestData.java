package com.insider.apiautomation.setrequestdata;

import com.insider.apiautomation.genericmethods.Constants;
import com.insider.apiautomation.helper.Helper;
import cucumber.api.DataTable;

public class SetRequestData {

	String[] fileData;

	int responseCode;
	DataTable filePoints;

	public SetRequestData(DataTable filePoints) {

		this.filePoints = filePoints;

	}

	public int getData(int row, int column) {

		return Helper.convertStringToInt(Helper.getDataFromTable(filePoints, row, column));
	}

	public String getStringData(int row, int column) {

		return Helper.getDataFromTable(filePoints, row, column);
	}

	public int getExpectedStatusCode() {

		return getData(1, 4);
	}

	public String[] getFileData() {

		return Helper.getFileData(filePoints, getData(1, 3));
	}

	public String getUrl() {

		return Helper.getParamAppendUrl(Constants.baseUrl, getStringData(1, 0), getFileData()[0]);
	}

	public String getPostPutUrl() {

		return Helper.getParamAppendUrl(Constants.baseUrl, Helper.getDataFromTable(filePoints, 1, 0), "");

	}

	public String getContentType() {

		return Helper.getContentType(filePoints);
	}

}
