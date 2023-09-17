import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GMP01RoutingModule } from './gmp01-routing.module';
import { GMPage1Component } from './gmpage1/gmpage1.component';


@NgModule({
  declarations: [
    GMPage1Component
  ],
  imports: [
    CommonModule,
    GMP01RoutingModule
  ]
})
export class GMP01Module { }
