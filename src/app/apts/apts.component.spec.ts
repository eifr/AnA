import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AptsComponent } from './apts.component';

describe('AptsComponent', () => {
  let component: AptsComponent;
  let fixture: ComponentFixture<AptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
