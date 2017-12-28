import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormTextInputComponent } from './text-input.component';

describe('DynamicFormTextInputComponent', () => {
  let component: DynamicFormTextInputComponent;
  let fixture: ComponentFixture<DynamicFormTextInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormTextInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
