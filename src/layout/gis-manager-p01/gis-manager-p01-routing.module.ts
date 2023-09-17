import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GisManagerComponent1Component } from './gis-manager-component1/gis-manager-component1.component';

const routes: Routes = [
  {path:'',redirectTo:'gisManagerP01',pathMatch:'full'},
  {path:'gisManagerP01',component:GisManagerComponent1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GisManagerP01RoutingModule { }
