import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import * as jwt_decode from 'jwt-decode';
import { map } from 'rxjs/operators';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

export const TOKEN_NAME: string = 'jwt_token';

@Injectable()
export class AuthService {

  private url: string = 'api/user';
//  private url: string = 'http://localhost:3000/api/user';

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http, @Inject(PLATFORM_ID) private platformId: Object) { }

  getToken(): string {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(TOKEN_NAME);
    }
    return;
  }

  setToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(TOKEN_NAME, token);
    }
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) token = this.getToken();
    if (!token) return true;

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  login(username: string, password: string) {
    return this.http
      .post(`${this.url}/login`, JSON.stringify({ "username": username, "password": password }), { headers: this.headers })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user.json && user.json().token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.setToken(JSON.stringify(user.json().token));
        }

        return user;
      })
      );
  }

  logout() {
    // remove user from local storage to log user out
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(TOKEN_NAME);
    }
  }
}