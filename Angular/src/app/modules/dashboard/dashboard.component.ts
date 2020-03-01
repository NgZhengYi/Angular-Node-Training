import {AfterViewInit, Component, ComponentFactoryResolver, OnInit, QueryList, ViewChildren, ViewContainerRef} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {GridsterConfig, GridsterItem} from 'angular-gridster2';

import {ChartComponent} from './chart/chart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChildren('component', {read: ViewContainerRef}) viewContainerRef: QueryList<ViewContainerRef>;
  gridConfig: GridsterConfig;
  gridArray: Array<GridsterItem>;

  constructor(private title: Title, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.title.setTitle('Angular - Dashboard');
    this.onGridConfig();
    this.gridArray = [
      {x: 0, y: 0, rows: 1, cols: 1, component: ChartComponent},
      // {x: 1, y: 0, rows: 1, cols: 1, component: ChartComponent},
    ];
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadComponent();
    }, 500);
  }

  loadComponent() {
    this.viewContainerRef.map((viewContainerRef: ViewContainerRef, index: number) => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.gridArray[index].component);
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent(componentFactory);
      // @ts-ignore
      componentRef.instance.data = {
        index
      };
    });
  }

  onGridConfig() {
    this.gridConfig = {
      gridType: 'fit',
      compactType: 'none',
      pushItems: true,
      margin: 5,
      minCols: 4,
      maxCols: 4,
      minRows: 3,
      maxRows: 3,
      setGridSize: true,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      outerMarginRight: null,
      useTransformPositioning: true,
      mobileBreakpoint: 0,
      fixedColWidth: 100,
      fixedRowHeight: 100,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      resizable: {enabled: false},
      draggable: {enabled: true},
      pushDirections: {north: true, south: true, east: true, west: true}
    };
  }

}
