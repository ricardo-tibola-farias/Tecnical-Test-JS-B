import { TestBed } from '@angular/core/testing';

import { ApiDataUsaService } from './api-data-usa.service';

describe('ApiDataUsaService', () => {
  let service: ApiDataUsaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDataUsaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
