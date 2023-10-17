import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { MaterialModule } from 'src/app/base/material.module';
import { DashboardRoutes } from './dashboard.routing';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(DashboardRoutes),
  ],
  bootstrap: [DashboardComponent],
  providers: [],
  exports: [DashboardComponent],
})
export class DashboardModule {}
