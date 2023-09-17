import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechManagerP02Component } from './tech-manager-p02/tech-manager-p02.component';

const routes: Routes = [
  {path:'',redirectTo:'techManagerP02',pathMatch:'full'},
  {path:'techManagerP02',component:TechManagerP02Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechManP02RoutingModule { }
