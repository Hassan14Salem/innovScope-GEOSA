import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManSecP01RoutingModule } from './man-sec-p01-routing.module';
import { ManSecP01ComponentComponent } from './man-sec-p01-component/man-sec-p01-component.component';


@NgModule({
  declarations: [
    ManSecP01ComponentComponent
  ],
  imports: [
    CommonModule,
    ManSecP01RoutingModule
  ]
})
export class ManSecP01Module { }
