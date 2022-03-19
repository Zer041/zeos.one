/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FourthStepComponent } from './fourth-step.component';

describe('FourthStepComponent', () => {
  let component: FourthStepComponent;
  let fixture: ComponentFixture<FourthStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
