import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Apt } from '../apt';
import { AptService } from '../apt.service';
import { LandingComponent } from '../landing/landing.component' ;
import { Meta, Title } from '@angular/platform-browser';

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
    private landingPage: LandingComponent,
    private meta: Meta, 
    private title: Title
  ) {
    this.aptService.createLinkForCanonicalURL();
   }

  ngOnInit() {
    this.getApt();

  }

  getApt(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.aptService.getApt(id)
      .subscribe(apt => {
        this.apt = apt;
        // console.log(this.apt);
        
        this.setMeta(this.landingPage.setImageUrl(this.apt.photos, this.apt.id));
      });
  }

  goBack(): void {
    this.location.back();
    this.landingPage.setHomepage();
  }

  setMeta(photo): void {
    let titleName = 'דירה חדשה ב'+this.apt.city+' 🤩';
    let tags = [
      {name: 'description', content: this.apt.address},
      {name: 'author', content: 'eifr'},
      {name: 'title', content: 'תיווך A&A'},
      {name: 'theme-color', content: '#2c3d4f'},
      {property: 'og:title', content: titleName},
      {property: 'og:description', content: this.apt.address},
      {property: 'og:image', content: photo}
    ];
    tags.forEach(tag => {
      this.meta.updateTag(tag);
    });

    this.title.setTitle(titleName);
  }


}
