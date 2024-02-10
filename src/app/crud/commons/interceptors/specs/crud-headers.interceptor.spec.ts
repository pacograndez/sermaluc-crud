import { TestBed } from '@angular/core/testing';

import { CrudHeadersInterceptor } from '../crud-headers.interceptor';

describe('CrudHeadersInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CrudHeadersInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CrudHeadersInterceptor = TestBed.inject(CrudHeadersInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
