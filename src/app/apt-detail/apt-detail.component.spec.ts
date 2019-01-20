import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AptDetailComponent } from './apt-detail.component';

describe('AptDetailComponent', () => {
  let component: AptDetailComponent;
  let fixture: ComponentFixture<AptDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AptDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AptDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
