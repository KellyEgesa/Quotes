import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayQoutesComponent } from './display-qoutes.component';

describe('DisplayQoutesComponent', () => {
  let component: DisplayQoutesComponent;
  let fixture: ComponentFixture<DisplayQoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayQoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayQoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
