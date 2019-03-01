import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  content: string = "אודות"
  isLogged: boolean;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '25rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    uploadUrl: 'v1/images', // if needed
    customClasses: [ // optional
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.isLogged = !this.authService.isTokenExpired() ? true : false;
  }


  getContent(): string {
    return this.content.toString();
  }

  updateContent(newContent: string): void {
    this.content = newContent.toString();
  }
}
