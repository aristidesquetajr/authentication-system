import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import locatePtAO from '@angular/common/locales/pt-AO';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HeaderComponent } from './components/template/header/header.component';
import { PermissionsComponent } from './views/permissions/permissions.component';
import { ModalComponent } from './components/modal/modal.component';

registerLocaleData(locatePtAO);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    PermissionsComponent,
    ModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-AO',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
