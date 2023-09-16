/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LayoutService } from '../layout.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Layout', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayoutService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([LayoutService], (service: LayoutService) => {
    expect(service).toBeTruthy();
  }));
});
