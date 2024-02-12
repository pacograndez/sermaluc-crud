import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningModalComponent } from '../warning-modal.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ITeam } from '../../../interfaces';

describe('WarningModalComponent', () => {
  let component: WarningModalComponent;
  let fixture: ComponentFixture<WarningModalComponent>;
  let data: ITeam;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarningModalComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: data }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WarningModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compare data model', () => {
    const team = {
      id: 1,
      full_name: 'Atlanta Hawks',
      name: 'Hawks',
      abbreviation: 'ATL',
      city: 'Atlanta',
      conference: 'East',
      division: 'Southeast'
    };
    expect(component.data).toEqual(team);
  });
});
