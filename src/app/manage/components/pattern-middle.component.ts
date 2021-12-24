import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-pattern-middle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative container-large">
      <!-- pattern desktop -->
      <div
        class="absolute top-full left-0 z-[-1] -translate-x-1/2 translate-y-1/2 hidden lg:block"
      >
        <img
          class="max-w-xl"
          src="/assets/images/bg-tablet-pattern.svg"
          alt="Illustration"
        />
      </div>
      <!-- end pattern desktop -->

      <!-- pattern mobile -->
      <div
        class="absolute top-0 right-0 z-[-1] translate-x-1/2 -translate-y-2/3 lg:hidden"
      >
        <img
          class="max-w-sm"
          src="/assets/images/bg-tablet-pattern.svg"
          alt="Illustration"
        />
      </div>
      <!-- end pattern mobile -->
    </div>
  `,
})
export class PatternMiddleComponent {}
