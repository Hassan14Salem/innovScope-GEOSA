import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecP04Component } from './sec-p04/sec-p04.component';

const routes: Routes = [
  {path:'' , redirectTo:'spec4' , pathMatch:'full'},
  {path:'spec4',component:SecP04Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretaryP04RoutingModule { }
