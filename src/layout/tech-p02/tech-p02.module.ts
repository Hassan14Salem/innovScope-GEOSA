import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechP02RoutingModule } from './tech-p02-routing.module';
import { TechnicalP02Component } from './technical-p02/technical-p02.component';


@NgModule({
  declarations: [
    TechnicalP02Component
  ],
  imports: [
    CommonModule,
    TechP02RoutingModule
  ]
})
export class TechP02Module { }
