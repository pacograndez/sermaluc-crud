import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
    this.id = new FormControl();
    this.abbreviation = new FormControl();
    this.city = new FormControl();
    this.conference = new FormControl();
    this.division = new FormControl();
    this.full_name = new FormControl();
    this.name = new FormControl();
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
}
