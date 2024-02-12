import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessModalComponent } from '../success-modal.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('SuccessModalComponent', () => {
  let component: SuccessModalComponent;
  let fixture: ComponentFixture<SuccessModalComponent>;
  let data: boolean;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessModalComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: data }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show save message', () => {
    data = true;
    component.data = data;
    expect(component.data).toBeTruthy();
  });

  it('should show delete message', () => {
    data = false;
    component.data = data;
    expect(component.data).toBeFalsy();
  });
});
