import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          display: true,
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };

  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [24, 25, 21];

  public date = new Date();
  public three;
  public two;
  public current;

  constructor() {
    this.three = this.date.getTime() - 1000 * 60 * 60 * 3;
    this.two = this.date.getTime() - 1000 * 60 * 60 * 2;
    this.current = this.date.getTime() - 1000 * 60 * 60 * 1;
    this.barChartLabels = ['11', '12', '13'];
  }

  ngOnInit() {}
}
