import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GMP04RoutingModule } from './gmp04-routing.module';
import { GMPage4Component } from './gmpage4/gmpage4.component';


@NgModule({
  declarations: [
    GMPage4Component
  ],
  imports: [
    CommonModule,
    GMP04RoutingModule
  ]
})
export class GMP04Module { }
