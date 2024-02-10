import { TestBed } from '@angular/core/testing';

import { CrudLoaderInterceptor } from '../crud-loader.interceptor';

describe('CrudLoaderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CrudLoaderInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CrudLoaderInterceptor = TestBed.inject(CrudLoaderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
