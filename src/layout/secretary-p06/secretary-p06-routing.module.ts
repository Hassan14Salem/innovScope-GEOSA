import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecP06Component } from './sec-p06/sec-p06.component';

const routes: Routes = [
  {path:'',redirectTo:'secp06',pathMatch:'full'},
  {path:'secp06',component:SecP06Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretaryP06RoutingModule { }
