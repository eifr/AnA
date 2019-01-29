import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { AptDetailComponent } from './apt-detail/apt-detail.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: 'home',        component: HomepageComponent, data: {animation: 'HomePage'}  },
  { path: 'about',        component: AboutComponent},
  { path: 'projects',        component: ProjectsComponent },
  { path: 'detail/:id', component: AptDetailComponent, data: {animation: 'DetailsPage'}  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent },

  { path: '**', component: NotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
