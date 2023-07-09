import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientregistryComponent } from './patientregistry.component';

describe('PatientregistryComponent', () => {
  let component: PatientregistryComponent;
  let fixture: ComponentFixture<PatientregistryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientregistryComponent]
    });
    fixture = TestBed.createComponent(PatientregistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
