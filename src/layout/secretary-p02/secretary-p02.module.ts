import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretaryP02RoutingModule } from './secretary-p02-routing.module';
import { ModalOneOfsecP01Component } from './modal-one-ofsec-p01/modal-one-ofsec-p01.component';


@NgModule({
  declarations: [
    ModalOneOfsecP01Component
  ],
  imports: [
    CommonModule,
    SecretaryP02RoutingModule
  ]
})
export class SecretaryP02Module { }
