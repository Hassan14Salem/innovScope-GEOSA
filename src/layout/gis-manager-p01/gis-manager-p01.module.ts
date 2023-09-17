import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GisManagerP01RoutingModule } from './gis-manager-p01-routing.module';
import { GisManagerComponent1Component } from './gis-manager-component1/gis-manager-component1.component';


@NgModule({
  declarations: [
    GisManagerComponent1Component
  ],
  imports: [
    CommonModule,
    GisManagerP01RoutingModule
  ]
})
export class GisManagerP01Module { }
