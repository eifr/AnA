import { SwUpdate } from '@angular/service-worker';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


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


    constructor(private swUpdate: SwUpdate, private meta: Meta, private title: Title) {
        this.meta.addTags([
            // tslint:disable-next-line:max-line-length
            { name: 'description', content: 'חברתנו נוסדה בשנת 2017 ועוסקת בתיווך ושיווק נדל‘‘ן באזור גוש דן. אנו מציעים מגוון שירותים מקצה לקצה לשוכרים/משכירים וכן לקנייה ומכירה של נכסים.' },
            { name: 'author', content: 'eifr' },
            { name: 'title', content: 'תיווך A&A' },
            { name: 'theme-color', content: '#2c3d4f' },
            { property: 'og:title', content: 'A&A RealEstate' },
            { property: 'og:description', content: 'חברת תיווך מודרנית למציאת נכסים במרכז הארץ' },
            { property: 'og:image', content: 'https://aa-realestate.co.il/aptImages/assets/ogImage.jpg' },

        ]);

        this.title.setTitle('תיווך A&A');
    }

    // title = 'AnA';


}
