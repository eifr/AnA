import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';

// import { AuthService } from './auth.service';
import { AuthService, SocialUser } from 'angularx-social-login';

import { Observable, of, empty } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  user: SocialUser;
  private loggedIn: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.authState
      .pipe(
        map(user => {
          if (user) {
            return true;
          }
          this.router.navigate(['/login']);
          return false;
        }), catchError(error => {
          this.router.navigate(['/login']);
          return empty();
        })
      );

    this.router.navigate(['/login']);
    return false;


  }

  checkLogin(url: string): boolean {
    if (this.loggedIn) { return true; }

    // Store the attempted URL for redirecting
    // this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}
