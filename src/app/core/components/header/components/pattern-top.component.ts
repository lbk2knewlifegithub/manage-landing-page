import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-pattern-top',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="absolute top-0 left-0 h-screen w-screen pointer-events-none">
      <div class="relative h-full mx-auto max-w-[1440px] overflow-x-hidden overflow-y-hidden">
        <!-- pattern intro  top -->
        <div
          class="absolute top-0 right-0 translate-x-1/4 -translate-y-[10%] lg:translate-x-1/4 lg:-translate-y-[20%]"
        >
          <img src="/assets/images/bg-tablet-pattern.svg" alt="Illustration" />
        </div>
        <!-- end pattern intro top -->

      </div>
    </div>
  `,
})
export class PatternTopComponent {}
