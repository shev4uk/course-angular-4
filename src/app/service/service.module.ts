import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';
import { ButtonsModule } from '../shared/components/buttons/buttons.module';


@NgModule({
  declarations: [ServiceComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    ButtonsModule
  ]
})
export class ServiceModule { }
