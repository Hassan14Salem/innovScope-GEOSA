import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GisManagerComponent2Component } from './gis-manager-component2/gis-manager-component2.component';

const routes: Routes = [
  {path:'',redirectTo:'gisManagerP02',pathMatch:'full'},
  {path:'gisManagerP02',component:GisManagerComponent2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GisManagerP02RoutingModule { }
