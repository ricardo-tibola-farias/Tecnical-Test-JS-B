import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopulationInfoModel } from './models/population-info.model';
import { ApiDataUsaService } from './services/api-data-usa.service';
import { GlobalHelper } from './helpers/global-helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public populationInfoList: PopulationInfoModel[];
  public populationListSubscription: Subscription;

  public options;

  constructor(private apiDataUsaService: ApiDataUsaService) { }

  public ngOnInit(): void {
    this.getPopulationDataInUSA();
  }

  ngOnDestroy(): void {
    this.populationListSubscription.unsubscribe();
  }

  private getPopulationDataInUSA(): void {

    this.apiDataUsaService.getPopulationDataInUSA('Nation', 'Population')
      .subscribe(populationResult => {

        const data = populationResult?.data;

        // this helper was created just to keep a camelCase name pattern and no space
        GlobalHelper.normalizeObjectKeys(data);

        this.populationInfoList = data;

        this.populateLineGraph();

      }, error => alert(error));

  }

  private populateLineGraph(): void {

    const years = this.populationInfoList
      .map(g => g.year);

    const population = this.populationInfoList.map(g => g.population);

    this.options = {
      legend: {
        data: ['Population U.S.A. by year'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: years,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'Population U.S.A. by year',
          type: 'bar',
          data: population,
          animationDelay: (idx) => idx * 10,
        }
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 5,
    };
  }
}
