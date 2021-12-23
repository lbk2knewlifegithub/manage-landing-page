import { Component } from '@angular/core';
import * as fromData from '@lbk/manage/data';
import { Feature, Testimonial } from '../models';

@Component({
  selector: 'lbk-manage-page',
  template: `
    <div class="space-y-20 lg:space-y-40">
      <!-- intro -->
      <lbk-intro class="block"></lbk-intro>
      <!-- end intro -->

      <!-- features -->
      <!-- <lbk-feature-list class="block" [features]="features"></lbk-feature-list> -->
      <!-- end features -->

      <!-- testimonials -->
      <!-- <lbk-testimonial-list class="block"></lbk-testimonial-list> -->
      <!-- end testimonials -->
    </div>
  `,
})
export class ManagePageComponent {
  features: Feature[] = fromData.features;
  testimonials: Testimonial[] = fromData.testimonials;
}
