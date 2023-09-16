/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecodeVariableComponent } from './recode-variable.component';

describe('RecodeVariableComponent', () => {
  let component: RecodeVariableComponent;
  let fixture: ComponentFixture<RecodeVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecodeVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecodeVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
