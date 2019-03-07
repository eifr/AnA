import { SwUpdate } from '@angular/service-worker';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AptService } from '../app/apt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe((evt) => {
        console.log('service worker updated');
      });

      this.swUpdate.checkForUpdate().then(() => {
        // noop
      }).catch((err) => {
        console.error('error when checking for update', err);
      });
    }
  }




  constructor(private swUpdate: SwUpdate, private meta: Meta, private title: Title, private aptService: AptService) {
    this.aptService.createLinkForCanonicalURL();

    this.meta.addTags([
      { name: 'description', content: 'חברת תיווך מודרנית למציאת נכסים בתל אביב והסביבה, חברתנו נוסדה בשנת 2017 ועוסקת בתיווך ושיווק נדל‘‘ן באזור גוש דן.  אנו מציעים מגוון שירותים מקצה לקצה לשוכרים/משכירים וכן לקנייה ומכירה של נכסים.' },
      { name: 'author', content: 'eifr' },
      { name: 'title', content: 'A&A RealEstate' },
      { name: 'theme-color', content: '#2c3d4f' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://aa-realestate.co.il' },
      { property: 'og:title', content: 'A&A RealEstate' },
      { property: 'og:description', content: 'חברת תיווך מודרנית למציאת נכסים בתל אביב והסביבה, חברתנו נוסדה בשנת 2017 ועוסקת בתיווך ושיווק נדל‘‘ן באזור גוש דן.  אנו מציעים מגוון שירותים מקצה לקצה לשוכרים/משכירים וכן לקנייה ומכירה של נכסים.' },
      { property: 'og:image', content: 'https://aa-realestate.co.il/assets/img/logo.png' }
    ]);



    this.title.setTitle('A&A RealEstate');


  }

  // title = 'AnA';


}
