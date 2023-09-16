/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VisualBinningComponent } from './visual-binning.component';

describe('VisualBinningComponent', () => {
  let component: VisualBinningComponent;
  let fixture: ComponentFixture<VisualBinningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualBinningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualBinningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
