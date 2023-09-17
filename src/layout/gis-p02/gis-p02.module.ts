import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GisP02RoutingModule } from './gis-p02-routing.module';
import { GisP02ComponentComponent } from './gis-p02-component/gis-p02-component.component';


@NgModule({
  declarations: [
    GisP02ComponentComponent
  ],
  imports: [
    CommonModule,
    GisP02RoutingModule
  ]
})
export class GisP02Module { }
