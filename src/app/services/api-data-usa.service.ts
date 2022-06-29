import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PopulationResultModel } from '../models/population-result-model';

@Injectable({
  providedIn: 'root'
})
export class ApiDataUsaService {
  private baseApiUrl = 'https://datausa.io/api/data';

  constructor(private httpClient: HttpClient) { }

  public getPopulationDataInUSA(drilldowns: string, measures: string): Observable<PopulationResultModel> {
    const params = {
      drilldowns,
      measures
    };
    return this.httpClient.get<PopulationResultModel>(this.baseApiUrl, { params });
  }

}
