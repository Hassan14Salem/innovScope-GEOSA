import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechP03RoutingModule } from './tech-p03-routing.module';
import { TechnicalP03Component } from './technical-p03/technical-p03.component';


@NgModule({
  declarations: [
    TechnicalP03Component
  ],
  imports: [
    CommonModule,
    TechP03RoutingModule
  ]
})
export class TechP03Module { }
