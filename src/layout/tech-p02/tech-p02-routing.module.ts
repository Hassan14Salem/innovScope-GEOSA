import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnicalP02Component } from './technical-p02/technical-p02.component';

const routes: Routes = [
  {path:'',redirectTo:'techP02',pathMatch:'full'},
  {path:'techP02',component:TechnicalP02Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechP02RoutingModule { }
