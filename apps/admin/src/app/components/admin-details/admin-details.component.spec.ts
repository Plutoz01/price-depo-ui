import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailsPageComponent } from './admin-details.component';

describe('AdminDetailsPageComponent', () => {
  let component: AdminDetailsPageComponent<any>;
  let fixture: ComponentFixture<AdminDetailsPageComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
