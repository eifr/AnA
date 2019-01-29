import { Component, OnInit } from '@angular/core';

import { Apt } from '../apt';
import { AptService } from '../apt.service';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-apts',
  templateUrl: './apts.component.html',
  styleUrls: ['./apts.component.scss']
})
export class AptsComponent implements OnInit {
  apts$: Observable<Apt[]>;
  searchText: string;
  constructor(private aptService: AptService) { }

  ngOnInit() {
    this.getApts();
  }

  getApts(): void {
    this.apts$ = this.aptService.getApts();
    
  }

}
