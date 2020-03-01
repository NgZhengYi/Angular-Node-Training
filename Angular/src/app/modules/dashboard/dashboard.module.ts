import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartModule} from 'angular-highcharts';
import {GridsterModule} from 'angular-gridster2';

import {AppMaterialModule} from '../../app-material.module';
import {ChartComponent} from './chart/chart.component';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';

@NgModule({
  declarations: [
    ChartComponent,
    DashboardComponent
  ],
  imports: [
    AppMaterialModule,
    ChartModule,
    CommonModule,
    DashboardRoutingModule,
    GridsterModule,
  ],
  exports: [
    DashboardRoutingModule
  ],
  entryComponents: [
    ChartComponent
  ]
})
export class DashboardModule {
}
