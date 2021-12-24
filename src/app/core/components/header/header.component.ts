import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  fadeInDownOnEnterAnimation,
  slideInDownOnEnterAnimation
} from 'angular-animations';

@Component({
  selector: 'lbk-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <lbk-pattern-top
      @fadeInDownOnEnter
      class="block absolute"
    ></lbk-pattern-top>

    <header @slideInDownOnEnter class="container pt-10">
      <nav class="flex items-center justify-between">
        <!--  logo-->
        <a class="z-50" routerLink="/">
          <img src="/assets/images/logo.svg" alt="Logo" />
        </a>
        <!--  end logo-->

        <!-- links -->
        <lbk-links-header class="hidden lg:block"></lbk-links-header>
        <!-- end links -->

        <div class="hidden lg:block">
          <a class="text-base btn btn-primary" routerLink="/">Get Started</a>
        </div>

        <!--  hamburger menu-->
        <lbk-menu class="z-50 block lg:hidden" [(open)]="openModal"></lbk-menu>
        <!--  end hamburger menu-->
      </nav>
    </header>

    <!-- modal links -->
    <lbk-modal-links [(open)]="openModal"></lbk-modal-links>
    <!-- end modal links -->
  `,
  animations: [
    slideInDownOnEnterAnimation({ delay: 200 }),
    fadeInDownOnEnterAnimation(),
  ],
})
export class HeaderComponent {
  openModal = false;
}
