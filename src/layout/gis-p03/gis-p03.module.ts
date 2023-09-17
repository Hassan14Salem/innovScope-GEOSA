import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GisP03RoutingModule } from './gis-p03-routing.module';
import { GisP03ComponentComponent } from './gis-p03-component/gis-p03-component.component';


@NgModule({
  declarations: [
    GisP03ComponentComponent
  ],
  imports: [
    CommonModule,
    GisP03RoutingModule
  ]
})
export class GisP03Module { }
