/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DrawbacksInternetComponent } from './drawbacks-internet.component';

describe('DrawbacksInternetComponent', () => {
  let component: DrawbacksInternetComponent;
  let fixture: ComponentFixture<DrawbacksInternetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawbacksInternetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawbacksInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
