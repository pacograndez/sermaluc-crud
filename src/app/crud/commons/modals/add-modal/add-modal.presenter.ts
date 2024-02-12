import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { ITeam } from '../../interfaces';

@Injectable()
export class AddModalPresenter {
  public form!: FormGroup;

  public id!: FormControl;
  public abbreviation!: FormControl;
  public city!: FormControl;
  public conference!: FormControl;
  public division!: FormControl;
  public full_name!: FormControl;
  public name!: FormControl;

  public title: string;

  constructor(private fb: FormBuilder) {
    this.initControlsAndValidators();
    this.initForm();
    this.title = '';
  }

  initControlsAndValidators(): void {
    this.id = new FormControl(null);
    this.abbreviation = new FormControl(null, [Validators.required]);
    this.city = new FormControl(null, [Validators.required]);
    this.conference = new FormControl(null, [Validators.required]);
    this.division = new FormControl(null, [Validators.required]);
    this.full_name = new FormControl(null, [Validators.required]);
    this.name = new FormControl(null, [Validators.required]);
  }

  initForm(): void {
    this.form = this.fb.group({
      id: this.id,
      abbreviation: this.abbreviation,
      city: this.city,
      conference: this.conference,
      division: this.division,
      full_name: this.full_name,
      name: this.name
    });
  }

  public setTitle(isAdd = true): void {
    this.title = isAdd ? 'Agregar Nuevo Team' : 'Editar Team';
  }
  public setData(data: ITeam): void {
    this.form.patchValue(data);
  }

  public checkForErrorsIn(control: FormControl): string {
    if (control.invalid && (control.dirty || control.touched)) {
      if (control.hasError('required')) {
        return 'Este campo es requerido';
      }
    }

    return '';
  }
}
