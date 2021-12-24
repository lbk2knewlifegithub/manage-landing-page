import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'lbk-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
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
    <lbk-footer></lbk-footer>
    <!--end footer-->
  `,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({ duration: 700 });
  }
}
