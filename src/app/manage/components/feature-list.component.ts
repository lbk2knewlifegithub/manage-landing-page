import { Component, Input } from '@angular/core';
import { Feature } from '../models';

@Component({
  selector: 'lbk-feature-list',
  template: `
    <div class="container grid gap-10 lg:grid-cols-2">
      <!-- title -->
      <div class="-px-3 space-y-5 text-center lg:text-left">
        <h1 class="font-bold text-3xl">
          What's different about <br class="hidden lg:inline" />
          Manager?
        </h1>

        <p class="text-muted leading-7">
          Manager provides all the functionally your team need, without the
          complexity. Our software is tailor-made for modern digital products
          teams.
        </p>
      </div>
      <!-- end title -->

      <ul class="space-y-10">
        <ng-container *ngFor="let feature of features; index as i">
          <lbk-feature-preview
            data-aos="slide-left"
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
