import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {Report} from '../models/Report';
import {AdAccountService} from '../services/AdAccount.service';
import {CampaignService} from '../services/Campaign.service';
import {LineItemService} from '../services/LineItem.service';
import { HelperBaseService } from './helperbase.service';

@Injectable({
	providedIn: 'root'
})

export class ReportService extends HelperBaseService {

	//********************************************************************
	// general holder 
	//********************************************************************
	report : Report;

	//********************************************************************
	// Catch all for the return value of a service call
	//********************************************************************
	result: any;

	//********************************************************************
	// sole constructor, injected with the HttpClient
	//********************************************************************
	constructor(private http: HttpClient) {
		super();
	}

		//********************************************************************
	// add a Report
	// returns the results untouched as a JSON representation
	// delegates via URI
	//********************************************************************
	createReport(reportName, generatedAt, fileUrl, AdAccount, Campaign, LineItem, ReportType) : Observable<any> {
		const uri = this.apiUrl + '/Report/create';
		const obj = {
			      		reportName: reportName,
      		generatedAt: generatedAt,
      		fileUrl: fileUrl,
      		AdAccount: AdAccount != null && AdAccount.length > 0 ? AdAccount : null,
      		Campaign: Campaign != null && Campaign.length > 0 ? Campaign : null,
      		LineItem: LineItem != null && LineItem.length > 0 ? LineItem : null,
			ReportType: ReportType
		};

		return this.http.post(uri, obj);
	}

	//********************************************************************
	// update a Report
	// returns an Observable
	// delegates via URI
	//********************************************************************
		updateReport(reportName, generatedAt, fileUrl, AdAccount, Campaign, LineItem, ReportType, id)  :  Observable<any>  {
			const uri = this.apiUrl + '/Report/update/' + id;
		const obj = {
				      		reportName: reportName,
      		generatedAt: generatedAt,
      		fileUrl: fileUrl,
      		AdAccount: AdAccount != null && AdAccount.length > 0 ? AdAccount : null,
      		Campaign: Campaign != null && Campaign.length > 0 ? Campaign : null,
      		LineItem: LineItem != null && LineItem.length > 0 ? LineItem : null,
			ReportType: ReportType
		};
		return this.http.post(uri, obj);
	}

	//********************************************************************
	// delete a Report
	// returns an Observable
	// delegates via URI
	//********************************************************************
	deleteReport(id)  : Observable<any> {
		const uri = this.apiUrl + '/Report/delete/' + id;

		return this.http.get(uri);
	}
	
	//********************************************************************
	// edit a Report
	// returns the results untouched as an Observable Report
	// Report model
	// delegates via URI
	//********************************************************************
	loadReport(id) : Observable<Report> {
		const uri = this.apiUrl + '/Report/load/' + id;

		return this.http.get<Report>(uri);
	}
	
	//********************************************************************
	// gets all Report
	// returns the results untouched as JSON representation of an
	// Observable array of Report models
	// delegates via URI
	//********************************************************************
	getReports() : Observable<Report[]> {
		const uri = this.apiUrl + '/Report/';

		return this
			.http.get<Report[]>(uri);
	}
	
			//********************************************************************
	// assigns a AdAccount on a Report
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignAdAccount( reportId, _adAccountId ): Observable<any> {

		// get the Report from storage
		this.loadHelper( reportId );

	// get the AdAccount from storage
	var tmp 	= new AdAccountService(this.http).editAdAccount(_adAccountId);

	// assign the AdAccount
	this.report.adAccount = tmp;

	// save the Report
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a AdAccount on a Report
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignAdAccount( reportId ): Observable<any> {

		// get the Report from storage
		this.loadHelper( reportId );

	// assign AdAccount to null
	this.report.adAccount = null;

	// save the Report
	return this.saveHelper();
}

		//********************************************************************
	// assigns a Campaign on a Report
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignCampaign( reportId, _campaignId ): Observable<any> {

		// get the Report from storage
		this.loadHelper( reportId );

	// get the Campaign from storage
	var tmp 	= new CampaignService(this.http).editCampaign(_campaignId);

	// assign the Campaign
	this.report.campaign = tmp;

	// save the Report
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a Campaign on a Report
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignCampaign( reportId ): Observable<any> {

		// get the Report from storage
		this.loadHelper( reportId );

	// assign Campaign to null
	this.report.campaign = null;

	// save the Report
	return this.saveHelper();
}

		//********************************************************************
	// assigns a LineItem on a Report
	// returns an Observable
	// delegates via URI
	//********************************************************************
	assignLineItem( reportId, _lineItemId ): Observable<any> {

		// get the Report from storage
		this.loadHelper( reportId );

	// get the LineItem from storage
	var tmp 	= new LineItemService(this.http).editLineItem(_lineItemId);

	// assign the LineItem
	this.report.lineItem = tmp;

	// save the Report
	return this.saveHelper();
}

	//********************************************************************
	// unassigns a LineItem on a Report
	// returns an Observable
	// delegates via URI
	//********************************************************************
	unassignLineItem( reportId ): Observable<any> {

		// get the Report from storage
		this.loadHelper( reportId );

	// assign LineItem to null
	this.report.lineItem = null;

	// save the Report
	return this.saveHelper();
}

	
	
	//********************************************************************
	// saveHelper - internal helper to save a Report
	//********************************************************************
	saveHelper() : Observable<any> {

		const uri = this.apiUrl + '/Report/update/' + this.report;

	return  this.http.post(uri, this.report );
}

	//********************************************************************
	// loadHelper - internal helper to load a Report
	//********************************************************************	
	loadHelper( id ) {
		this.editReport(id)
			.subscribe((res : Report) => {
				this.report = res;
			});
	}
}