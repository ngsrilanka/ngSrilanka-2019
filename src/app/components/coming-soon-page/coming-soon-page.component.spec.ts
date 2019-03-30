/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComingSoonPageComponent } from './coming-soon-page.component';

describe('ComingSoonPageComponent', () => {
  let component: ComingSoonPageComponent;
  let fixture: ComponentFixture<ComingSoonPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComingSoonPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingSoonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
