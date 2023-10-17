import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageSchedulerRoutes } from './page-scheduler-routing';
import { PageSchedulerComponent } from './page-scheduler.component';
import { MaterialModule } from 'src/app/base/material.module';


@NgModule({
  declarations: [
    PageSchedulerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(PageSchedulerRoutes)
  ],
  bootstrap: [PageSchedulerComponent],
  providers: [],
  exports: [PageSchedulerComponent]

})
export class PageSchedulerModule { }



