import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  animation, trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';
import { slideInAnimation } from '../animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class LandingComponent implements OnInit {
  url = [];
  bgState = 'homepage';
  
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
     // console.log(this.url);
    }
    this.bgState = 'detail';
  }

  setHomepage(): void {
    this.url[0] = this.homepage;
    this.bgState = 'homepage';
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
