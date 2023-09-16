/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IdentifyingDuplicateCasesComponent } from './identifying-duplicate-cases.component';

describe('IdentifyingDuplicateCasesComponent', () => {
  let component: IdentifyingDuplicateCasesComponent;
  let fixture: ComponentFixture<IdentifyingDuplicateCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentifyingDuplicateCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyingDuplicateCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
