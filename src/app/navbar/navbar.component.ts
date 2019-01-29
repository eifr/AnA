import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { LandingComponent } from '../landing/landing.component';
import { Location, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private location: Location,
    private landingPage: LandingComponent
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      let mainNav = document.getElementById('js-menu');
      let navBarToggle = document.getElementById('js-navbar-toggle');

      navBarToggle.addEventListener('click', function () {
        mainNav.classList.toggle('active');
      });
    }
  }

  goHome(): void {
    this.landingPage.setHomepage();
  }

}
