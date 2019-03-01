import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  animation, trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';
import { slideInAnimation } from '../animations';
import { FooterComponent } from '../footer/footer.component';
import { AptService } from '../apt.service';

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
  footer:FooterComponent;

  private imgUrl = 'https://aa-realestate.co.il/aptImages/';
  private homepage = './assets/img/landing-bg.jpg';
  
  constructor(
    private aptService: AptService
  ) {}


  ngOnInit() {
    this.url[0] = this.homepage;
    this.aptService.getAppState().subscribe (state => {
      this.bgState = state;
    });
  }
  
  setImageUrl(photos, id) {
    for (let index = 0; index < photos.length; index++) {
      this.url[index] = this.imgUrl + id + '/' + photos[index];
    }
    
    this.aptService.stateDetail();
    return this.url[0];
  }

  setHomepage(): void {
    this.url[0] = this.homepage;
    this.aptService.stateHomepage();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
