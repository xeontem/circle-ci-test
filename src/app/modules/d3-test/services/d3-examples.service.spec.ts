import { TestBed, inject } from '@angular/core/testing';

import { D3ExamplesService } from './d3-examples.service';

describe('D3ExamplesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [D3ExamplesService]
    });
  });

  it('should be created', inject([D3ExamplesService], (service: D3ExamplesService) => {
    expect(service).toBeTruthy();
  }));
});
