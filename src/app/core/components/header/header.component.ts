import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <lbk-pattern-top class="block absolute"></lbk-pattern-top>

    <header class="container pt-10 overflow-hidden">
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
})
export class HeaderComponent {
  openModal = false;
}
