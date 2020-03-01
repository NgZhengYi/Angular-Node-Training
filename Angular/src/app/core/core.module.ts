import {NgModule} from '@angular/core';

import {AppMaterialModule} from '../app-material.module';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {AppRoutingModule} from '../app-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    AppMaterialModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent
  ]
})
export class CoreModule {
}
