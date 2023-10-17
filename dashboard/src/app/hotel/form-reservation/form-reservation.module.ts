import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormReservationRoutingModule } from './form-reservation-routing.module';
import { FormReservationComponent } from './form-reservation.component';


@NgModule({
  declarations: [
    FormReservationComponent
  ],
  imports: [
    CommonModule,
    FormReservationRoutingModule
  ]
})
export class FormReservationModule { }
