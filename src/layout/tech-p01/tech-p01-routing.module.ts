import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnicalP01Component } from './technical-p01/technical-p01.component';

const routes: Routes = [
  {path:'',redirectTo:'techP01',pathMatch:'full'},
  {path:'techP01',component:TechnicalP01Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechP01RoutingModule { }
