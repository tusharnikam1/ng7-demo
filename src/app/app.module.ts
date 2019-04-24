import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';

import { HttpConfigInterceptor} from './services/http.interceptor';
import {SpinnerComponent} from './modules/common/spinner/spinner.component';
import {AlertsComponent} from './modules/common/alerts/alerts.component';


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
