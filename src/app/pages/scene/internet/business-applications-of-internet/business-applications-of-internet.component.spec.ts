/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BusinessApplicationsOfInternetComponent } from './business-applications-of-internet.component';

describe('BusinessApplicationsOfInternetComponent', () => {
  let component: BusinessApplicationsOfInternetComponent;
  let fixture: ComponentFixture<BusinessApplicationsOfInternetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessApplicationsOfInternetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessApplicationsOfInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
