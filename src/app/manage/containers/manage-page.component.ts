import { Component } from '@angular/core';
import * as fromData from '@lbk/manage/data';
import { Feature, Testimonial } from '../models';

@Component({
  selector: 'lbk-manage-page',
  template: `
    <div class="">
      <!-- intro -->
      <lbk-intro class="block mt-14"></lbk-intro>
      <!-- end intro -->

      <!-- features -->
      <lbk-feature-list class="block mt-28" [features]="features"></lbk-feature-list>
      <!-- end features -->

      <!-- testimonials -->
      <lbk-testimonial-list
        [testimonials]="testimonials"
        class="block mt-16"
      ></lbk-testimonial-list>
      <!-- end testimonials -->
    </div>
  `,
})
export class ManagePageComponent {
  features: Feature[] = fromData.features;
  testimonials: Testimonial[] = fromData.testimonials;

  constructor() {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
  }
}
