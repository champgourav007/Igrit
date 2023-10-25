import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../shared/material/material.module';
import {MatIconModule} from '@angular/material/icon';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoryCardComponent } from './story-card/story-card.component';
import { HiringCardsComponent } from './hiring-cards/hiring-cards.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonalCardsComponent } from './testimonal-cards/testimonal-cards.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AssociatedCompainesComponent } from './associated-compaines/associated-compaines.component';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [
    HeaderComponent,
    LoginPageComponent,
    StoryCardComponent,
    HiringCardsComponent,
    FooterComponent,
    TestimonalCardsComponent,
    AboutUsComponent,
    AssociatedCompainesComponent,
  ],
  imports: [
    // RouterModule.forChild(),
    CommonModule,
    MaterialModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    // AboutUsComponent
  ],
  exports:[
    HeaderComponent,
    LoginPageComponent,
    StoryCardComponent,
    HiringCardsComponent,
    FooterComponent,
    TestimonalCardsComponent,
    AboutUsComponent,
    AssociatedCompainesComponent
  ]
})
export class FeaturesModule { }
