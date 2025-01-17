import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../services/flickr.service';

@Component({
  selector: 'app-search-images',
  templateUrl: './search-images.component.html',
  styleUrls: ['./search-images.component.css']
})
export class SearchImagesComponent implements OnInit {
  images = [];
  keyword: string;

  constructor(private flickrService: FlickrService) { }

  ngOnInit() {
    this.flickrService.search_keyword("Photos/food")
    .toPromise()
    .then(res => {
      this.images = res;})
  }

  // search(event: any) {
  //   this.keyword = event.target.value.toLowerCase();
  //   if (this.keyword && this.keyword.length > 0) {
  //     this.flickrService.search_keyword(this.keyword)
  //     .toPromise()
  //     .then(res => {
  //       this.images = res;
  //     });
  //   }
  // }

  onScroll() {
    if ("food" && "food".length > 0) {
      this.flickrService.search_keyword("food")
      .toPromise()
      .then(res => {
        this.images = this.images.concat(res);
      });
    }
  }

}
