import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GMPage1Component } from './gmpage1/gmpage1.component';

const routes: Routes = [
  {path:'',redirectTo:'GMPage1',pathMatch:'full'},
  {path:'GMPage1',component:GMPage1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GMP01RoutingModule { }
