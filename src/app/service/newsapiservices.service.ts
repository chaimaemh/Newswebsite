import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=7c6e9f066014456f8d95b780f7411655"

  //BusinessNewsapiurl

  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7c6e9f066014456f8d95b780f7411655"





//topheading()

topHeading():Observable<any> 
{
  return this._http.get(this.newsApiUrl);
}

//businessnews()

businessNews():Observable<any>
{
  return this._http.get(this.businessApiUrl);
}
}
