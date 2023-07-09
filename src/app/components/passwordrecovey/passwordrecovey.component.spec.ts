import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordrecoveyComponent } from './passwordrecovey.component';

describe('PasswordrecoveyComponent', () => {
  let component: PasswordrecoveyComponent;
  let fixture: ComponentFixture<PasswordrecoveyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordrecoveyComponent]
    });
    fixture = TestBed.createComponent(PasswordrecoveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
