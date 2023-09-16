/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TypesOfMeasurementScalesComponent } from './types-of-measurement-scales.component';

describe('TypesOfMeasurementScalesComponent', () => {
  let component: TypesOfMeasurementScalesComponent;
  let fixture: ComponentFixture<TypesOfMeasurementScalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesOfMeasurementScalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesOfMeasurementScalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
