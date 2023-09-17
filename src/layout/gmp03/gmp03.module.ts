import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GMP03RoutingModule } from './gmp03-routing.module';
import { GMPage3Component } from './gmpage3/gmpage3.component';


@NgModule({
  declarations: [
    GMPage3Component
  ],
  imports: [
    CommonModule,
    GMP03RoutingModule
  ]
})
export class GMP03Module { }
