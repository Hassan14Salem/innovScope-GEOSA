import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretaryP04RoutingModule } from './secretary-p04-routing.module';
import { SecP04Component } from './sec-p04/sec-p04.component';


@NgModule({
  declarations: [
    SecP04Component
  ],
  imports: [
    CommonModule,
    SecretaryP04RoutingModule
  ]
})
export class SecretaryP04Module { }
