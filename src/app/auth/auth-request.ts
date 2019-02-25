import { Headers, Http, BaseRequestOptions } from '@angular/http';
import { TOKEN_NAME } from './auth.service';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

const AUTH_HEADER_KEY = 'Authorization';
const AUTH_PREFIX = 'Bearer';

export class AuthRequestOptions extends BaseRequestOptions {
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    super();
    
      const token = (isPlatformBrowser(this.platformId)) ? localStorage.getItem(TOKEN_NAME) : "";
    
    if(token) {
      this.headers.append(AUTH_HEADER_KEY, `${AUTH_PREFIX} ${token}`);
    }
  }

}