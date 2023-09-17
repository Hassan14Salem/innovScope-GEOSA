import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManSecP02RoutingModule } from './man-sec-p02-routing.module';
import { ManSecP02ComponentComponent } from './man-sec-p02-component/man-sec-p02-component.component';
import { InternalTransmittersComponent } from './internal-transmitters/internal-transmitters.component';
import { SectionalTransmittersComponent } from './sectional-transmitters/sectional-transmitters.component';
import { LogComponent } from './log/log.component';


@NgModule({
  declarations: [
    ManSecP02ComponentComponent,
    InternalTransmittersComponent,
    SectionalTransmittersComponent,
    LogComponent
  ],
  imports: [
    CommonModule,
    ManSecP02RoutingModule
  ]
})
export class ManSecP02Module { }
