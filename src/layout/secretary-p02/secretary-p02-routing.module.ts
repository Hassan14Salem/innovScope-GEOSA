import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalOneOfsecP01Component } from './modal-one-ofsec-p01/modal-one-ofsec-p01.component';

const routes: Routes = [
  {path:'',component:ModalOneOfsecP01Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretaryP02RoutingModule { }
