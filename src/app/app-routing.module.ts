import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',loadChildren:() => import('../layout/layout.module').then(layout => layout.LayoutModule)},
  {path:'home',loadChildren:() => import('../home/home.module').then(home => home.HomeModule)},
  {path:'login',loadChildren:() => import('../login/login.module').then(login => login.LoginModule)}


  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
