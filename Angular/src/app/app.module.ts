import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AppMaterialModule} from './app-material.module';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {DashboardModule} from './modules/dashboard/dashboard.module';
import {StorageModule} from './modules/storage/storage.module';
import {HomeModule} from './modules/home/home.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppMaterialModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    CoreModule,
    DashboardModule,
    HomeModule,
    HttpClientModule,
    StorageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
