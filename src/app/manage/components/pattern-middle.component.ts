import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-pattern-middle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="absolute top-0 left-0 h-screen w-screen pointer-events-none">
      <div class="relative h-full mx-auto max-w-[1440px]">
        <!-- pattern desktop -->
        <div
          class="absolute top-full left-0 -translate-x-1/2 translate-y-1/2 hidden lg:block"
        >
          <img
            class="max-w-xl"
            src="/assets/images/bg-tablet-pattern.svg"
            alt="Illustration"
          />
        </div>
        <!-- end pattern desktop -->
      </div>
    </div>
  `,
})
export class PatternMiddleComponent {}
