import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container relative">
      <!-- <img
        class="absolute right-0 top-0 -translate-y-1/4 z-[-1]"
        src="/assets/images/bg-tablet-pattern.svg"
        alt=""
      />

      <img
        class="absolute left-0 top-1/3 -translate-x-1/4 z-[-1]"
        src="/assets/images/bg-tablet-pattern.svg"
        alt=""
      /> -->

      <lbk-header></lbk-header>

      <router-outlet></router-outlet>

      <!--footer-->
      <!-- <lbk-footer></lbk-footer> -->
      <!--end footer-->
    </div>
  `,
})
export class AppComponent {}
