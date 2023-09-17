import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GisP02ComponentComponent } from './gis-p02-component/gis-p02-component.component';

const routes: Routes = [
  {path:'',redirectTo:'gisP02',pathMatch:"full"},
  {path:'gisP02',component:GisP02ComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GisP02RoutingModule { }
