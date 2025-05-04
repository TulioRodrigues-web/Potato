import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { PotatoApiService } from './potatoapi.service';

describe('HeroapiService', () => {
  let service: PotatoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PotatoApiService);
=======
import { PotatoapiService } from './potatoapi.service';

describe('PotatoapiService', () => {
  let service: PotatoapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PotatoapiService);
>>>>>>> 509312d (Atualizações feitas no projeto)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
