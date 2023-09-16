/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApplicationOfNetworkAndCommunicationComponent } from './application-of-network-and-communication.component';

describe('ApplicationOfNetworkAndCommunicationComponent', () => {
  let component: ApplicationOfNetworkAndCommunicationComponent;
  let fixture: ComponentFixture<ApplicationOfNetworkAndCommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationOfNetworkAndCommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationOfNetworkAndCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
