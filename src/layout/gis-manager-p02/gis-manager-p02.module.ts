import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GisManagerP02RoutingModule } from './gis-manager-p02-routing.module';
import { GisManagerComponent2Component } from './gis-manager-component2/gis-manager-component2.component';


@NgModule({
  declarations: [
    GisManagerComponent2Component
  ],
  imports: [
    CommonModule,
    GisManagerP02RoutingModule
  ]
})
export class GisManagerP02Module { }
