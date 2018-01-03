import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormSearchableDropdownComponent } from './searchable-dropdown.component';

describe('DynamicFormSearchableDropdownComponent', () => {
  let component: DynamicFormSearchableDropdownComponent;
  let fixture: ComponentFixture<DynamicFormSearchableDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormSearchableDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormSearchableDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
