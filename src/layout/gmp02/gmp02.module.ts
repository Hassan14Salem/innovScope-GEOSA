import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GMP02RoutingModule } from './gmp02-routing.module';
import { GMPage2Component } from './gmpage2/gmpage2.component';


@NgModule({
  declarations: [
    GMPage2Component
  ],
  imports: [
    CommonModule,
    GMP02RoutingModule
  ]
})
export class GMP02Module { }
