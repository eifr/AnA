import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public authService: AuthService) { }
  user: SocialUser;
  private loggedIn: boolean;

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  getUser() {
    return this.user;
  }

  signOut(): void {
    this.authService.signOut();
  }
}
