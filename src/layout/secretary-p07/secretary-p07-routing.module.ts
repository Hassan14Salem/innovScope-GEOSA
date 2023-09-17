import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecP07Component } from './sec-p07/sec-p07.component';

const routes: Routes = [
  {path:'',redirectTo:'secp07',pathMatch:'full'},
  {path:'secp07',component:SecP07Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretaryP07RoutingModule { }
