import { Component, OnInit } from '@angular/core';
import { AptService } from '../apt.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  bgState = 'homepage';

  constructor(private aptService: AptService) { }

  ngOnInit() {
    this.aptService.getAppState().subscribe (state => {
      this.bgState = state;
    });
  }

  
}
