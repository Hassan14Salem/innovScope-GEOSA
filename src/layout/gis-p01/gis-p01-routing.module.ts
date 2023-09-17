import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GisP01ComponentComponent } from './gis-p01-component/gis-p01-component.component';

const routes: Routes = [
  {path:'',redirectTo:'gisP01',pathMatch:"full"},
  {path:'gisP01',component:GisP01ComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GisP01RoutingModule { }
