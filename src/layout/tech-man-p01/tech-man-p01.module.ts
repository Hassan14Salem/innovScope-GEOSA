import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechManP01RoutingModule } from './tech-man-p01-routing.module';
import { TechManagerPageOneComponent } from './tech-manager-page-one/tech-manager-page-one.component';


@NgModule({
  declarations: [
    TechManagerPageOneComponent
  ],
  imports: [
    CommonModule,
    TechManP01RoutingModule
  ]
})
export class TechManP01Module { }
