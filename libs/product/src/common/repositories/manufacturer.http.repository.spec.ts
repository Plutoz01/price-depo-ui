import { TestBed, inject } from '@angular/core/testing';

import { ManufacturerHttpRepository } from './manufacturer.http.repository';

describe('ManufacturerHttpRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManufacturerHttpRepository]
    });
  });

  it('should be created', inject([ManufacturerHttpRepository], ( service: ManufacturerHttpRepository) => {
    expect(service).toBeTruthy();
  }));
});
