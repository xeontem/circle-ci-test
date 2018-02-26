import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FetchTranslateService } from './fetch-translate.service';

describe('FetchTranslateService', () => {
  let injector: TestBed;
  let service: FetchTranslateService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FetchTranslateService]
    });
    injector = getTestBed();
    service = injector.get(FetchTranslateService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch translate', () => {
    const responce = 'test-translate';

    service.getTranslate('test-text', 'direction').subscribe((trlt: string) => {
      expect(trlt).toBe('test-translate');
      expect(trlt).toEqual(responce);
    });

    const req = httpMock.expectOne(reqObj => reqObj.url.includes('test-text'));
    req.flush({text: [responce]});
    expect(req.request.method).toBe('GET');
  });

});
