import { TranslatePipe } from './translate.pipe';
import { FetchTranslateServiceStub } from '../../../../../tests/stubs/';
import { inject, TestBed } from '@angular/core/testing';
import { FetchTranslateService } from '../services/fetch-translate.service';

describe('TranslatePipe', () => {
  beforeEach(() => {
    TestBed
      .configureTestingModule({
        providers: [
          {provide: FetchTranslateService, useClass: FetchTranslateServiceStub}
        ]
      });
  });

  it('', inject([FetchTranslateService], (translateService: FetchTranslateService) => {
    const pipe = new TranslatePipe(translateService);
    expect(pipe).toBeTruthy();
  }));

});
