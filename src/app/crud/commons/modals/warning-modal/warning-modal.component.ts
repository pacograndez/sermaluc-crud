import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ITeam } from '../../interfaces';

@Component({
  selector: 'app-warning-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './warning-modal.component.html',
  styleUrls: ['./warning-modal.component.scss']
})
export class WarningModalComponent {
  constructor(
    public dialogRef: MatDialogRef<WarningModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITeam
  ) {}

  onCancel() {
    this.dialogRef.close(false);
  }

  onConfirm() {
    this.dialogRef.close(true);
  }
}
