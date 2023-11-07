import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent  {

  businessnewsDisplay: any = [];

  constructor(private _services: NewsapiservicesService) { }

  ngOnInit(): void {
    this._services.businessNews().subscribe((result) => {
      this.businessnewsDisplay = result.articles;
    });
  }
}
