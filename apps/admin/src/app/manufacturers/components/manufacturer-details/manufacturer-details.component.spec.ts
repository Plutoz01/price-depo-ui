import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerDetailsPageComponent } from './manufacturer-details.component';

describe('ManufacturerDetailsPageComponent', () => {
  let component: ManufacturerDetailsPageComponent;
  let fixture: ComponentFixture<ManufacturerDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
