import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  // skillsData: any = [
  //   {
  //     'id': '1',
  //     'skill': 'IONIC 3/4/5/6',
  //     'progress': '95%'
  //   },
  //   {
  //     'id': '2',
  //     'skill': 'Angular 5/6/7/8/9',
  //     'progress': '95%'
  //   },
  //   {
  //     'id': '3',
  //     'skill': 'Cordova & Capacitor',
  //     'progress': '99%'
  //   },
  //   {
  //     'id': '4',
  //     'skill': 'State Mangemet - NGRX',
  //     'progress': '95%'
  //   },
  //   {
  //     'id': '5',
  //     'skill': 'RXJS',
  //     'progress': '95%'
  //   },
  //   {
  //     'id': '6',
  //     'skill': 'DATA STRUCTURE',
  //     'progress': '90%'
  //   },
  //    {
  //     'id': '7',
  //     'skill': 'RESTFULL API',
  //     'progress': '95%'
  //   },
  //     {
  //     'id': '8',
  //     'skill': 'AWS Cognito, S3, Lambda function',
  //     'progress': '85%'
  //   },
  //      {
  //     'id': '9',
  //     'skill': 'NestJS, ObjectionJS',
  //     'progress': '80%'
  //   },
  //       {
  //     'id': '10',
  //     'skill': 'Test Automation',
  //     'progress': '99%'
  //   },
  // ];

  // educationData: any = [
  //   {
  //     'id': '1',
  //     'from_to_year': '2016 - 2027',
  //     'education': 'Master\'s Degree',
  //     'stream': 'Master of Science & Technology',
  //     'institution': 'UNIVERSITY OF MASSACHUSETTES'
  //   },
  //   {
  //     'id': '2',
  //     'from_to_year': '2011 - 2015',
  //     'education': 'Bachelor\'s Degree',
  //     'stream': 'BTech',
  //     'institution': 'DHARMSINH DESAI UNIVERSITY'
  //   }
  // ];

  // exprienceData: any = [
  //   {
  //     'id': '1',
  //     'from_to_month_year': 'JUNE 2018 - AUGUST 2018',
  //     'organization': 'WITTYFEED',
  //     'designation': 'Full Stack Developer',
  //     'details': `Created fully functional projects for <strong>WittyFeed<\/strong>,
  //     A publisher Dashboard was created using <strong>Angular 6, CodeIgniter 3 , Rest API and JWT (Json Web Token).
  //     <\/strong> It involves multiple modules like Analytics, Stories, RSS Links, Payments.
  //     Another project was Influencer admin Dashboard which has features like app approval,
  //     app rejection in OneFeed(WittyFeed\u2019s personalised feed SDK) integrations.
  //     Lastly the admin dashboard for managing publishers for OneFeed.`
  //   },
  //   {
  //     'id': '2',
  //     'from_to_month_year': 'OCTOBER 2017 - NOVEMBER 2017',
  //     'organization': 'MITS, GWALIOR',
  //     'designation': 'Web Developer',
  //     'details': 'Designed the Official Website of the <strong>INDUSTRY CONCLAVE<\/strong>.'
  //   },
  //   {
  //     'id': '3',
  //     'from_to_month_year': 'APRIL 2018 - FEB 2019',
  //     'organization': 'Walmart (Sam\'s Club)',
  //     'designation': 'Front End Developer / Hybrid Mobile Developer',
  //     'details': 'Worked on Mobile Application <strong>Fresh Sales Tools</strong>.'
  //   }
  // ];
  // // contactus(data: any): Observable<any> {
  // //   return this.http.post(this.baseUrl + 'contact', data);
  // // }

  // skills(): Observable<any> {
  //   // return this.http.get(this.baseUrl + 'skills');
  //   return this.skillsData;
  // }

  // education(): Observable<any> {
  //   // return this.http.get(this.baseUrl + 'education');
  //   return this.educationData;
  // }

  // exprience(): Observable<any> {
  //   // return this.http.get(this.baseUrl + 'exprience');
  //   return this.exprienceData;
  // }
}
