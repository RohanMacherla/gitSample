import { TestBed } from '@angular/core/testing';

import { ApiStudentserviceService } from './api-studentservice.service';

describe('ApiStudentserviceService', () => {
  let service: ApiStudentserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiStudentserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
