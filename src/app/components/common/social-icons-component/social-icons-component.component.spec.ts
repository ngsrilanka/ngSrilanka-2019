/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SocialIconsComponentComponent } from './social-icons-component.component';

describe('SocialIconsComponentComponent', () => {
  let component: SocialIconsComponentComponent;
  let fixture: ComponentFixture<SocialIconsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialIconsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialIconsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
