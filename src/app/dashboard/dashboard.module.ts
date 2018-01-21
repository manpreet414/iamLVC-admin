import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { AppSharedModule } from '../shared/app-shared.module';

import { DashboardService } from "./dashboard.service";
import { AgmCoreModule } from '@agm/core';


declare var require: any;

const GOOGLE_DISTANCE_API_KEY: string = "AIzaSyB84_b3sz-C67ERkmEnQXAu_EglmB-AG1g";


@NgModule({
  imports: [
    AppSharedModule,
    DashboardRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: GOOGLE_DISTANCE_API_KEY
    })
  ],
  exports: [],
  declarations: [DashboardComponent],
  providers: [DashboardService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule { }
