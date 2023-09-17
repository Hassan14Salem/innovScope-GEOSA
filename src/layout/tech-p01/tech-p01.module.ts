import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechP01RoutingModule } from './tech-p01-routing.module';
import { TechnicalP01Component } from './technical-p01/technical-p01.component';


@NgModule({
  declarations: [
    TechnicalP01Component
  ],
  imports: [
    CommonModule,
    TechP01RoutingModule
  ]
})
export class TechP01Module { }
