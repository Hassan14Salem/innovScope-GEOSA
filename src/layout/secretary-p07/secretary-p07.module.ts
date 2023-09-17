import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretaryP07RoutingModule } from './secretary-p07-routing.module';
import { SecP07Component } from './sec-p07/sec-p07.component';


@NgModule({
  declarations: [
    SecP07Component
  ],
  imports: [
    CommonModule,
    SecretaryP07RoutingModule
  ]
})
export class SecretaryP07Module { }
