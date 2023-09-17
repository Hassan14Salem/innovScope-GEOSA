import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretaryP03RoutingModule } from './secretary-p03-routing.module';
import { FilterationModalComponent } from './filteration-modal/filteration-modal.component';


@NgModule({
  declarations: [
    FilterationModalComponent
  ],
  imports: [
    CommonModule,
    SecretaryP03RoutingModule
  ]
})
export class SecretaryP03Module { }
