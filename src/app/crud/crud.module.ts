import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './crud.component';
import { CrudContainer } from './crud.container';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { CrudLoaderComponent } from './commons/components';

@NgModule({
  declarations: [CrudContainer, CrudComponent],
  imports: [
    CommonModule,
    CrudRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCheckboxModule,
    MatButtonModule,
    CrudLoaderComponent
  ]
})
export class CrudModule {}
