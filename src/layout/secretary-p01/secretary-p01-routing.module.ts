import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecP01Component } from './sec-p01/sec-p01.component';

const routes: Routes = [
{path:'',redirectTo:'secp01',pathMatch:'full'},
{path:'secp01',component:SecP01Component},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretaryP01RoutingModule { }
