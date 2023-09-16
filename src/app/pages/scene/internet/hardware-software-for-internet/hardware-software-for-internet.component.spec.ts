/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HardwareSoftwareForInternetComponent } from './hardware-software-for-internet.component';

describe('HardwareSoftwareForInternetComponent', () => {
  let component: HardwareSoftwareForInternetComponent;
  let fixture: ComponentFixture<HardwareSoftwareForInternetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardwareSoftwareForInternetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareSoftwareForInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
