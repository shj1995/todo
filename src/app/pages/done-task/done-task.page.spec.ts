import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneTaskPage } from './done-task.page';

describe('DoneTaskPage', () => {
  let component: DoneTaskPage;
  let fixture: ComponentFixture<DoneTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneTaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
