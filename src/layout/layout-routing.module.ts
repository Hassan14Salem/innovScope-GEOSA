 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:'',component:NavbarComponent,
  children:[
    {path:'',loadChildren:()=>import('./secretary-p01/secretary-p01.module').then(secpage1 => secpage1.SecretaryP01Module)},
    {path:'modal',loadChildren:()=>import('./secretary-p02/secretary-p02.module').then(modal1 => modal1.SecretaryP02Module)},
    {path:'secp04',loadChildren:()=>import('./secretary-p04/secretary-p04.module').then(spec4 => spec4.SecretaryP04Module)},

    {path:'secp05',loadChildren:()=>import('./secretary-p05/secretary-p05.module').then(spec5 => spec5.SecretaryP05Module)},
    {path:'secp06',loadChildren:()=>import('./secretary-p06/secretary-p06.module').then(spec6=> spec6.SecretaryP06Module)},
    {path:'secp07',loadChildren:()=>import('./secretary-p07/secretary-p07.module').then(spec7=> spec7.SecretaryP07Module)},

    {path:'managerOfsecp01',loadChildren:()=>import('./man-sec-p01/man-sec-p01.module').then(manOfSecP01=> manOfSecP01.ManSecP01Module)},
    {path:'managerOfsecp02',loadChildren:()=>import('./man-sec-p02/man-sec-p02.module').then(manOfSecP02=> manOfSecP02.ManSecP02Module)},

    {path:'technicalP01',loadChildren:()=>import('./tech-p01/tech-p01.module').then(technicalP01=> technicalP01.TechP01Module)},
    {path:'technicalP02',loadChildren:()=>import('./tech-p02/tech-p02.module').then(technicalP02=> technicalP02.TechP02Module)},
    {path:'technicalP03',loadChildren:()=>import('./tech-p03/tech-p03.module').then(technicalP03=> technicalP03.TechP03Module)},

    {path:'techManagerP01',loadChildren:()=>import('./tech-man-p01/tech-man-p01.module').then(techManager=> techManager.TechManP01Module)},
    {path:'techManagerP02',loadChildren:()=>import('./tech-man-p02/tech-man-p02.module').then(techManager=> techManager.TechManP02Module)},

    {path:'gisPageOne',loadChildren:()=>import('./gis-p01/gis-p01.module').then(gis=> gis.GisP01Module)},
    {path:'gisPageTwo',loadChildren:()=>import('./gis-p02/gis-p02.module').then(gis=> gis.GisP02Module)},
    {path:'gisPageThree',loadChildren:()=>import('./gis-p03/gis-p03.module').then(gis=> gis.GisP03Module)},
    {path:'gisPageFour',loadChildren:()=>import('./gis-p04/gis-p04.module').then(gis=> gis.GisP04Module)},

    {path:'gisMAnagerP01',loadChildren:()=>import('./gis-manager-p01/gis-manager-p01.module').then(gisManager=> gisManager.GisManagerP01Module)},
    {path:'gisMAnagerP02',loadChildren:()=>import('./gis-manager-p02/gis-manager-p02.module').then(gisManager=> gisManager.GisManagerP02Module)},


    {path:'GMP01',loadChildren:()=>import('./gmp01/gmp01.module').then(GM=> GM.GMP01Module)},
    {path:'GMP02',loadChildren:()=>import('./gmp02/gmp02.module').then(GM=> GM.GMP02Module)},
    {path:'GMP03',loadChildren:()=>import('./gmp03/gmp03.module').then(GM=> GM.GMP03Module)},
    {path:'GMP04',loadChildren:()=>import('./gmp04/gmp04.module').then(GM=> GM.GMP04Module)},












  ]


}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
