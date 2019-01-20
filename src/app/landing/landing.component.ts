import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  url = [];
  
  private imgUrl = 'https://aa-realestate.co.il/aptImages/';
  private homepage = 'https://aa-realestate.co.il/landing-bg.523f53046e6210bfe7f5.jpg';
  constructor() {
   }


  ngOnInit() {
    this.url[0] = this.homepage;
  }

  
  setImageUrl(photos, id): void {
    for (let index = 0; index < photos.length; index++) {
      this.url[index] = this.imgUrl + id + '/' + photos[index];
      console.log(this.url);
    }
  }

  setHomepage(): void {
    this.url[0] = this.homepage;
  }

}
