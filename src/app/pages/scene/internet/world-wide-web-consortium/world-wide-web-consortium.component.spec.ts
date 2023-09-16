/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WorldWideWebConsortiumComponent } from './world-wide-web-consortium.component';

describe('WorldWideWebConsortiumComponent', () => {
  let component: WorldWideWebConsortiumComponent;
  let fixture: ComponentFixture<WorldWideWebConsortiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldWideWebConsortiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldWideWebConsortiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
