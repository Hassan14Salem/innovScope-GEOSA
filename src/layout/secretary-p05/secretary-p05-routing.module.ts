import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErsalEle3tmadComponent } from './ersal-ele3tmad/ersal-ele3tmad.component';

const routes: Routes = [
  {path:'',redirectTo:'secp05',pathMatch:'full'},
  {path:'secp05',component:ErsalEle3tmadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretaryP05RoutingModule { }
