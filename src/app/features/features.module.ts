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
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobsPageComponent } from './jobs-page/jobs-page.component';
import { EmployersCardComponent } from './employers-card/employers-card.component'
// import { TableComponent } from './table/table.component';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { NgImageSliderModule } from 'ng-image-slider';


const routes: Routes = [
  {
    path: 'jobs', component: JobsPageComponent,
  }
]

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
    JobsPageComponent,
    EmployersCardComponent,
    // TableComponent
  ],
  imports: [
    // RouterModule.forChild(),
    CommonModule,
    MaterialModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
    RouterModule,
    // MatCheckboxModule
    // NgImageSliderModule,
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
    AssociatedCompainesComponent,
    JobsPageComponent,
    EmployersCardComponent
    // TableComponent
  ],
  
})
export class FeaturesModule { }
