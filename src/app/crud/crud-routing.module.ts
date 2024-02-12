import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudContainer } from './crud.container';

const routes: Routes = [
  {
    path: '',
    component: CrudContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule {}
