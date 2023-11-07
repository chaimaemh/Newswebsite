import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private services: NewsapiservicesService) { 
  }

  // display data
  topheadingDisplay:any = [];

  ngOnInit(): void { 
    this.services.topHeading().subscribe((result) => { 
      console.log(result);
      this.topheadingDisplay = result.articles;
    });
  }
}
