import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GisP04ComponentComponent } from './gis-p04-component/gis-p04-component.component';

const routes: Routes = [
  {path:'',redirectTo:'gisP04',pathMatch:"full"},
  {path:'gisP04',component:GisP04ComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GisP04RoutingModule { }
