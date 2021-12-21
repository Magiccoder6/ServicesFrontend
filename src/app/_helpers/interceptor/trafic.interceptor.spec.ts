import { TestBed } from '@angular/core/testing';

import { TraficInterceptor } from './trafic.interceptor';

describe('TraficInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TraficInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TraficInterceptor = TestBed.inject(TraficInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
