import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechManP02RoutingModule } from './tech-man-p02-routing.module';
import { TechManagerP02Component } from './tech-manager-p02/tech-manager-p02.component';


@NgModule({
  declarations: [
    TechManagerP02Component
  ],
  imports: [
    CommonModule,
    TechManP02RoutingModule
  ]
})
export class TechManP02Module { }
