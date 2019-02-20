import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTabsModule } from '@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.navLinks = [
      {
        label: "Dashboard",
        path: "dashboard",
      },
      {
        label: "ניהול דירות",
        path: "manageApts",
      }
    ];
  }

  ngOnInit() {

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);

  }
}
