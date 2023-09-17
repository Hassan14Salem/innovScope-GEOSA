import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechManagerPageOneComponent } from './tech-manager-page-one/tech-manager-page-one.component';

const routes: Routes = [
  {path:'',redirectTo:'techManagerP01',pathMatch:'full'},
  {path:'techManagerP01',component:TechManagerPageOneComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechManP01RoutingModule { }
