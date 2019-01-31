import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageAptsComponent } from './manage-apts/manage-apts.component';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminDashboardComponent, AdminComponent, ManageAptsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
})
export class AdminModule { }
