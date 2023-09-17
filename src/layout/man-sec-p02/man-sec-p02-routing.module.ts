import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManSecP02ComponentComponent } from './man-sec-p02-component/man-sec-p02-component.component';
import { LogComponent } from './log/log.component';
import { SectionalTransmittersComponent } from './sectional-transmitters/sectional-transmitters.component';
import { InternalTransmittersComponent } from './internal-transmitters/internal-transmitters.component';

const routes: Routes = [
  {path:'',redirectTo:'managerOfsecp02',pathMatch:'full'},

  {path:'managerOfsecp02',component:ManSecP02ComponentComponent , children:[
    {path:'internalTransmitter',component:InternalTransmittersComponent},
    {path:'sectionalTransmitter',component:SectionalTransmittersComponent},
    {path:'log',component:LogComponent},
  ]},
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManSecP02RoutingModule { }
