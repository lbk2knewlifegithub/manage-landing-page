import { Component, Input } from '@angular/core';
import { Feature } from '../models';

@Component({
  selector: 'lbk-feature-list',
  template: `
    <div class="relative container-large">
      <!-- pattern desktop -->
      <div
        class="absolute z-[-1] top-1/2 left-0 -translate-x-1/2 hidden lg:block"
      >
        <img
          class="max-w-lg"
          src="/assets/images/bg-tablet-pattern.svg"
          alt="Illustration"
        />
      </div>
      <!-- end pattern desktop -->

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
    </div>
  `,
  animations: [],
})
export class FeatureListComponent {
  @Input() features!: Feature[];
}
