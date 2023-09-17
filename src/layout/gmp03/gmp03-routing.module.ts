import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GMPage3Component } from './gmpage3/gmpage3.component';

const routes: Routes = [
  {path:'',redirectTo:'GMPage3',pathMatch:'full'},
  {path:'GMPage3',component:GMPage3Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GMP03RoutingModule { }
