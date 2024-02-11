import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-success-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent {
  constructor(
    public dialogRef: MatDialogRef<SuccessModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: boolean
  ) {}
  onConfirm() {
    this.dialogRef.close(true);
  }
}
