import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {
  FeatureListComponent,
  IntroComponent,
  TestimonialPreviewComponent
} from './components';
import { FeaturePreviewComponent } from './components/feature-preview.component';
import { TestimonialListComponent } from './components/testimonial-list.component';
import { ManagePageComponent } from './containers';
import { ManageRoutingModule } from './manage-routing.module';

const COMPONENTS = [
  IntroComponent,
  FeaturePreviewComponent,
  FeatureListComponent,
  TestimonialPreviewComponent,
  TestimonialListComponent,
];

const CONTAINERS = [ManagePageComponent];

@NgModule({
  imports: [CommonModule, ManageRoutingModule, CarouselModule],
  declarations: [COMPONENTS, CONTAINERS],
})
export class ManageModule {}
