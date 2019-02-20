import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatTableModule, MatCheckboxModule, MatDialogModule, MatInputModule, MatButtonModule, MatFormFieldModule } from '@angular/material';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageAptsComponent, addApt } from './manage-apts/manage-apts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AptTableComponent } from './apt-table/apt-table.component';

@NgModule({
  entryComponents: [ManageAptsComponent, addApt],
  declarations: [AdminDashboardComponent, AdminComponent, ManageAptsComponent, addApt, AptTableComponent],
  imports: [
    MatTabsModule,
    MatTableModule,
    CommonModule,
    AdminRoutingModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule
  ]
})
export class AdminModule { }
