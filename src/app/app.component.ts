import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      {name: 'description', content: 'Modern Real Estate in Tel Aviv Area'},
      {name: 'author', content: 'eifr'},
      {name: 'title', content: 'תיווך A&A'},
      {name: 'theme-color', content: '#2c3d4f'},
      {property: 'og:title', content: 'A&A RealEstate'},
      {property: 'og:description', content: 'חברת תיווך מודרנית למציאת נכסים במרכז הארץ'},
      {property: 'og:image', content: 'https://aa-realestate.co.il/aptImages/assets/ogImage.jpg'}
    ]);

    this.title.setTitle('תיווך A&A');
    // screen.orientation.lock('landscape');
  }

  // title = 'AnA';


}
