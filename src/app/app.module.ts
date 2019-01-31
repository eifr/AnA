import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { AptsComponent } from './apts/apts.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AptDetailComponent } from './apt-detail/apt-detail.component';
import { FilterPipe } from './filter.pipe';
import { SignInComponent } from './sign-in/sign-in.component';

import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('158720883166-cacroppdcmf1ngkqodl4b3vtv23a1ai7.apps.googleusercontent.com')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FooterComponent,
    NavbarComponent,
    HomepageComponent,
    NotFoundComponent,
    AboutComponent,
    ProjectsComponent,
    AptsComponent,
    AptDetailComponent,
    FilterPipe,
    SignInComponent,

  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    SocialLoginModule,
    TransferHttpCacheModule,
    HttpClientModule,

    AdminModule,
    AuthModule,

    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    ScrollingModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
})
export class AppModule { }
