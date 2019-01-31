import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAptsComponent } from './manage-apts.component';

describe('ManageAptsComponent', () => {
  let component: ManageAptsComponent;
  let fixture: ComponentFixture<ManageAptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
