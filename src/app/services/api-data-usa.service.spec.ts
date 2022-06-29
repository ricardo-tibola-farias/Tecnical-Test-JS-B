import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ApiDataUsaService } from './api-data-usa.service';

describe('ApiDataUsaService', () => {
  let service: ApiDataUsaService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ApiDataUsaService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Like system I want verify, if method GET been called', () => {
    const spy = spyOn(httpClient, 'get').and.callThrough();
    service.getPopulationDataInUSA('Nation', 'Population');
    expect(spy).toHaveBeenCalled();
  });

  it('Like system I want verify, if method GET been called with correct url', () => {
    const spy = spyOn(httpClient, 'get').and.callThrough();
    service.getPopulationDataInUSA('Nation', 'Population');
    expect(spy).toHaveBeenCalledWith('https://datausa.io/api/data', { params: { drilldowns: 'Nation', measures: 'Population' } });
  });
});
