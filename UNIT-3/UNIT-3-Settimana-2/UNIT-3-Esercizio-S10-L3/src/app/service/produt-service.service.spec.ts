import { TestBed } from '@angular/core/testing';

import { ProdutServiceService } from './produt-service.service';

describe('ProdutServiceService', () => {
  let service: ProdutServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
