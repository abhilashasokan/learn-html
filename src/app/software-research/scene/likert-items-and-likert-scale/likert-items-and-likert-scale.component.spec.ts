/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LikertItemsAndLikertScaleComponent } from './likert-items-and-likert-scale.component';

describe('LikertItemsAndLikertScaleComponent', () => {
  let component: LikertItemsAndLikertScaleComponent;
  let fixture: ComponentFixture<LikertItemsAndLikertScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikertItemsAndLikertScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikertItemsAndLikertScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
