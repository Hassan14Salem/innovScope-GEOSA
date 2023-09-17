import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GisP01RoutingModule } from './gis-p01-routing.module';
import { GisP01ComponentComponent } from './gis-p01-component/gis-p01-component.component';


@NgModule({
  declarations: [
    GisP01ComponentComponent
  ],
  imports: [
    CommonModule,
    GisP01RoutingModule
  ]
})
export class GisP01Module { }
