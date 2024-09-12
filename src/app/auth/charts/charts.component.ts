import { Component } from '@angular/core';
import { GoogleChartsModule, ChartType } from 'angular-google-charts';  // Import ChartType

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent {
  public chartType: ChartType = ChartType.PieChart;

  // Chart Data Configuration
  public chartData = {
    data: [
      ['Task', 'Hours per Day'],
      ['Work', 8],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 3],
      ['Sleep', 8],
    ],
    options: {
      title: 'My Daily Activities',
      is3D: true,
    },
  };
}
