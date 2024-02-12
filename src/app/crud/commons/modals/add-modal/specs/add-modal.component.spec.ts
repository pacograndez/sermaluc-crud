import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalComponent } from '../add-modal.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ITeam } from '../../../interfaces';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddModalComponent', () => {
  let component: AddModalComponent;
  let fixture: ComponentFixture<AddModalComponent>;
  let team: ITeam;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddModalComponent, BrowserAnimationsModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: team }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
