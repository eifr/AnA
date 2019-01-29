import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  animation, trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';
import { slideInAnimation, bgChange } from '../animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    slideInAnimation,
    bgChange
  ]
})
export class LandingComponent implements OnInit {
  url = [];
  bgState = 'homepage';
  
  private imgUrl = 'https://aa-realestate.co.il/aptImages/';
  private homepage = './assets/img/landing-bg.jpg';
  
  constructor() {
   }


  ngOnInit() {
    this.url[0] = this.homepage;
  }

  
  setImageUrl(photos, id) {
    for (let index = 0; index < photos.length; index++) {
      this.url[index] = this.imgUrl + id + '/' + photos[index];
     // console.log(this.url);
    }
    this.bgState = 'detail';
    return this.url[0];
  }

  setHomepage(): void {
    if (this.bgState != 'homepage') {
      this.url[0] = this.homepage;
      this.bgState = 'homepage';
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
