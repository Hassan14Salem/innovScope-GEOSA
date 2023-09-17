import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretaryP01RoutingModule } from './secretary-p01-routing.module';
import { SecP01Component } from './sec-p01/sec-p01.component';


@NgModule({
  declarations: [
    SecP01Component
  ],
  imports: [
    CommonModule,
    SecretaryP01RoutingModule
  ]
})
export class SecretaryP01Module { }
