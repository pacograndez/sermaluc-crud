import { TestBed } from '@angular/core/testing';

import { CrudLoaderService } from '../crud-loader.service';

describe('CrudLoaderService', () => {
  let service: CrudLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
