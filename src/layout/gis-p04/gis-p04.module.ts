import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GisP04RoutingModule } from './gis-p04-routing.module';
import { GisP04ComponentComponent } from './gis-p04-component/gis-p04-component.component';


@NgModule({
  declarations: [
    GisP04ComponentComponent
  ],
  imports: [
    CommonModule,
    GisP04RoutingModule
  ]
})
export class GisP04Module { }
