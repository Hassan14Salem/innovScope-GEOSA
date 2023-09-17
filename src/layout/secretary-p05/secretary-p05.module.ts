import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretaryP05RoutingModule } from './secretary-p05-routing.module';
import { ErsalEle3tmadComponent } from './ersal-ele3tmad/ersal-ele3tmad.component';


@NgModule({
  declarations: [
    ErsalEle3tmadComponent
  ],
  imports: [
    CommonModule,
    SecretaryP05RoutingModule
  ]
})
export class SecretaryP05Module { }
