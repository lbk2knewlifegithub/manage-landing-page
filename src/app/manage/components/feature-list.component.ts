import { Component, Input } from '@angular/core';
import { Feature } from '../models';

@Component({
  selector: 'lbk-feature-list',
  template: `
    <lbk-pattern-middle></lbk-pattern-middle>

    <div class="container grid gap-10 lg:grid-cols-2 lg:gap-20">
      <!-- title -->
      <div class="px-6 space-y-4 text-center md:px-0 lg:text-left">
        <h1 class="font-bold text-3xl lg:text-4xl">
          What's different about Manager?
        </h1>

        <p
          class="max-w-md mx-auto  text-muted leading-7 lg:mr-auto lg:ml-0 lg:max-w-sm"
        >
          Manager provides all the functionally your team need, without the
          complexity. Our software is tailor-made for modern digital products
          teams.
        </p>
      </div>
      <!-- end title -->

      <ul class="space-y-8">
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
  animations: [],
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
