import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { FeaturesModule } from '../features/features.module';


@NgModule({
  declarations: [
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    FeaturesModule
  ],
  exports:[
    LandingPageComponent,
  ]
})
export class MainModule { }
