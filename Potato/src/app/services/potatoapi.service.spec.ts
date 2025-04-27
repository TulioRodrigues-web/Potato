import { TestBed } from '@angular/core/testing';

import { PotatoApiService } from './potatoapi.service';

describe('HeroapiService', () => {
  let service: PotatoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PotatoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
