import { Component, OnInit } from '@angular/core';

import { Apt } from '../apt';
import { AptService } from '../apt.service';


@Component({
  selector: 'app-apts',
  templateUrl: './apts.component.html',
  styleUrls: ['./apts.component.scss']
})
export class AptsComponent implements OnInit {
  apts: Apt[];

  constructor(private aptService: AptService) { }

  ngOnInit() {
    this.getApts();
  }

  getApts(): void {
    this.aptService.getApts()
    .subscribe(apts => this.apts = apts);
  }

}
