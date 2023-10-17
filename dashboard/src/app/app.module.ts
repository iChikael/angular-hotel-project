import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthComponent } from './auth/auth.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { SpaceSignInComponent } from './auth/space-sign-in/space-sign-in.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FullComponent } from './layouts/full/full.component';
import { MaterialModule } from './base/material.module';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './hotel/dashboard/dashboard.module';
import { SpinnerComponent } from './shared/spinner.component';
import { FormReservationModule } from './hotel/form-reservation/form-reservation.module';
import { PageSchedulerModule } from './hotel/page-scheduler/page-scheduler.module';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    SpaceSignInComponent,
    HeaderComponent,
    SidebarComponent,
    FullComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    DashboardModule,
    FormReservationModule,
    PageSchedulerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
