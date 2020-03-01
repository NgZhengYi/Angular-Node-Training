import {Component, OnInit} from '@angular/core';
import {Options} from 'highcharts';
import {Chart} from 'angular-highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  private options: Options;
  chart: Chart;

  constructor() {
  }

  ngOnInit(): void {
    this.onChartConfig();
    this.loadChartDataPredefined();
  }

  onChartConfig() {
    this.options = {
      chart: {
        height: 240,
        width: 380,
        options3d: {enabled: true, alpha: 45}
      },
      title: {text: ''},
      credits: {enabled: false},
      tooltip: {
        headerFormat: '<span style="font-size:12px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },
      xAxis: {type: 'category'},
      series: []
    };

    this.chart = new Chart(this.options);
  }

  loadChartDataPredefined() {
    this.options.series = [{
      name: 'Pie Chart',
      type: 'pie',
      data: [
        {name: 'Item 1', y: 50},
        {name: 'Item 2', y: 15},
        {name: 'Item 3', y: 10},
        {name: 'Item 4', y: 5},
        {name: 'Others', y: 20}
      ]
    }];
  }

}
