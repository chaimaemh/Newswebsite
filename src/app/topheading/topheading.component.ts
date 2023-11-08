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

  topheadingDisplay: any = [];
  filteredArticles: any = [];
  p: number = 2;
  itemsPerPage: number = 10;
  searchTerm: string = ''; 

  ngOnInit(): void {
    this.services.topHeading().subscribe((result) => {
      console.log(result);
      this.topheadingDisplay = result.articles;
      this.filteredArticles = this.topheadingDisplay; 
    });
  }

  filterNews() {
    console.log(this.searchTerm)
    if (this.searchTerm) {
      this.filteredArticles = this.topheadingDisplay.filter((article: any) => {
        return article.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    } else {
      this.filteredArticles = this.topheadingDisplay;
    }
  }

  onSearchInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchTerm = inputElement.value;
    this.filterNews();
  }
}
