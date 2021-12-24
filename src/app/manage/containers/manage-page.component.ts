import { Component } from '@angular/core';
import * as fromData from '@lbk/manage/data';
import { slideInUpOnEnterAnimation } from 'angular-animations';
import { Feature, Testimonial } from '../models';

@Component({
  selector: 'lbk-manage-page',
  template: `
    <main>
      <div class="relative container-large overflow-x-hidden ">
        <!-- intro -->
        <lbk-intro class="block mt-14 xl:mt-20"></lbk-intro>
        <!-- end intro -->

        <div
          class="absolute right-0 translate-x-1/2 -translate-y-1/2 lg:hidden z-[-1]"
        >
          <img
            class="max-w-sm"
            src="/assets/images/bg-tablet-pattern.svg"
            alt="Illustration"
          />
        </div>

        <!-- features -->
        <lbk-feature-list
          @slideInUpOnEnter
          class="block mt-28 md:mt-32"
          [features]="features"
        ></lbk-feature-list>
        <!-- end features -->

        <!-- testimonials -->
        <lbk-testimonial-list
          [testimonials]="testimonials"
          class="block mt-16 sm:mt-32"
        ></lbk-testimonial-list>
        <!-- end testimonials -->
      </div>

      <!-- call to action -->
      <lbk-cta data-aos="fade-in" data-aos="" class="block mt-16"></lbk-cta>
      <!-- end call to action -->
    </main>
  `,
  animations: [slideInUpOnEnterAnimation()],
})
export class ManagePageComponent {
  features: Feature[] = fromData.features;
  testimonials: Testimonial[] = fromData.testimonials;
}
