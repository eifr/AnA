import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Apt } from '../apt';
import { AptService } from '../apt.service';
import { LandingComponent } from '../landing/landing.component' ;

@Component({
  selector: 'app-apt-detail',
  templateUrl: './apt-detail.component.html',
  styleUrls: ['./apt-detail.component.scss']
})
export class AptDetailComponent implements OnInit {
  @Input() apt: Apt;
  

  constructor(
    private route: ActivatedRoute,
    private aptService: AptService,
    private location: Location,
    private landingPage: LandingComponent
  ) { }

  ngOnInit() {
    this.getApt();

  }

  getApt(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.aptService.getApt(id)
      .subscribe(apt => {
        this.apt = apt;
        this.landingPage.setImageUrl(this.apt.photos, this.apt.id);
      });
  }

  goBack(): void {
    this.location.back();
    this.landingPage.setHomepage();
  }

 

}
