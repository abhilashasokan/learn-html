/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DataAnalysisUsingSpssComponent } from './data-analysis-using-spss.component';

describe('DataAnalysisUsingSpssComponent', () => {
  let component: DataAnalysisUsingSpssComponent;
  let fixture: ComponentFixture<DataAnalysisUsingSpssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataAnalysisUsingSpssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAnalysisUsingSpssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
