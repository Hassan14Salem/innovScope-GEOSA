import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GisP03ComponentComponent } from './gis-p03-component/gis-p03-component.component';

const routes: Routes = [
  {path:'',redirectTo:'gisP03',pathMatch:"full"},
  {path:'gisP03',component:GisP03ComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GisP03RoutingModule { }
