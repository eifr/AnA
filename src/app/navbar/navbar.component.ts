import { Component, OnInit } from '@angular/core';
import { LandingComponent } from '../landing/landing.component' ;
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private location: Location,
    private landingPage: LandingComponent
  ) { }

  ngOnInit() {
    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');

    navBarToggle.addEventListener('click', function () {
      mainNav.classList.toggle('active');
    });

  }

  goBack(): void {
    this.location.back();
    this.landingPage.setHomepage();
  }

}
