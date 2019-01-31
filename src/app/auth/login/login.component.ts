import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message: string;

  constructor(public authService: AuthService, public router: Router) {
  }


  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(() => {
      this.router.navigate(['/admin']);
    });
  }


  signOut(): void {
    console.log(this.authService.authState);
    this.authService.signOut();
  }
}
