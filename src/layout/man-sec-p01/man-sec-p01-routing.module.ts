import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManSecP01ComponentComponent } from './man-sec-p01-component/man-sec-p01-component.component';

const routes: Routes = [
  {path:'',redirectTo:'managerOfsecp01',pathMatch:'full'},

  {path:'managerOfsecp01',component:ManSecP01ComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManSecP01RoutingModule { }
