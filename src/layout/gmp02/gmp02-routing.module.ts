import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GMPage2Component } from './gmpage2/gmpage2.component';

const routes: Routes = [
  {path:'',redirectTo:'GMPage2',pathMatch:'full'},
  {path:'GMPage2',component:GMPage2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GMP02RoutingModule { }
