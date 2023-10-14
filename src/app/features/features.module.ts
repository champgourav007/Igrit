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


@NgModule({
  declarations: [
    HeaderComponent,
    LoginPageComponent,
    StoryCardComponent,
    HiringCardsComponent,
    FooterComponent,
    TestimonalCardsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent,
    LoginPageComponent,
    StoryCardComponent,
    HiringCardsComponent,
    FooterComponent,
    TestimonalCardsComponent
  ]
})
export class FeaturesModule { }
