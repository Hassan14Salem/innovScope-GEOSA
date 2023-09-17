import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretaryP06RoutingModule } from './secretary-p06-routing.module';
import { SecP06Component } from './sec-p06/sec-p06.component';


@NgModule({
  declarations: [
    SecP06Component
  ],
  imports: [
    CommonModule,
    SecretaryP06RoutingModule
  ]
})
export class SecretaryP06Module { }
