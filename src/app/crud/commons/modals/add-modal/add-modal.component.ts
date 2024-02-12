import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AddModalPresenter } from './add-modal.presenter';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ITeam } from '../../interfaces';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss'],
  providers: [AddModalPresenter]
})
export class AddModalComponent implements OnInit {
  constructor(
    public addModalPresenter: AddModalPresenter,
    public dialogRef: MatDialogRef<AddModalComponent>,
    @Inject(MAT_DIALOG_DATA) public team: ITeam
  ) {}

  ngOnInit(): void {
    if (this.team) {
      this.addModalPresenter.setTitle(false);
      this.addModalPresenter.setData(this.team);
    } else {
      this.addModalPresenter.setTitle();
    }
  }

  onSubmit(): void {
    this.dialogRef.close(this.addModalPresenter.form.value);
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
