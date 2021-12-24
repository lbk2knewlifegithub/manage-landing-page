import { Component, Input } from '@angular/core';
import { Feature } from '../models';

@Component({
  selector: 'lbk-feature-list',
  template: `
    <div class="lg:flex lg:gap-10 lg:justify-between">
      <!-- title -->
      <div class="px-3">
        <h1
          class="text-center font-bold text-3xl text-skin-base lg:text-left lg:text-4xl"
        >
          What's different about <br class="hidden lg:inline" />
          Manager?
        </h1>

        <p
          class="text-muted mt-5 text-center leading-7  lg:text-left lg:text-xl"
        >
          Manager provides all the functionally your team need, without the
          complexity. Our software is tailor-made for modern digital products
          teams.
        </p>
      </div>
      <!-- end title -->

      <ul class="mt-14 space-y-10 lg:mt-0">
        <ng-container *ngFor="let feature of features; index as i">
          <lbk-feature-preview
            class="block"
            [index]="i"
            [feature]="feature"
          ></lbk-feature-preview>
        </ng-container>
      </ul>
    </div>
  `,
})
export class FeatureListComponent {
  @Input() features!: Feature[];
  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   pullDrag: false,
  //   dots: true,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 2,
  //     },
  //     840: {
  //       items: 3,
  //     },
  //   },
  //   nav: false,
  // };
}
