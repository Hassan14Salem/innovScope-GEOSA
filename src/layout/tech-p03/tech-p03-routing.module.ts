import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnicalP03Component } from './technical-p03/technical-p03.component';

const routes: Routes = [
  {path:'',redirectTo:'techP03',pathMatch:'full'},
  {path:'techP03',component:TechnicalP03Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechP03RoutingModule { }
