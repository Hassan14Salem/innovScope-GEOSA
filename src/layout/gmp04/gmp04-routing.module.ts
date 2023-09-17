import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GMPage1Component } from '../gmp01/gmpage1/gmpage1.component';
import { GMPage4Component } from './gmpage4/gmpage4.component';

const routes: Routes = [
  {path:'',redirectTo:'GMPage4',pathMatch:'full'},
  {path:'GMPage4',component:GMPage4Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GMP04RoutingModule { }
