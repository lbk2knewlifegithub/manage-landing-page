import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="container mt-10">
      <nav class="flex items-center justify-between">
        <!--  logo-->
        <a routerLink="/">
          <img src="/assets/images/logo.svg" alt="Logo" />
        </a>
        <!--  end logo-->

        <!-- links -->
        <lbk-links-header class="block lg:hidden"></lbk-links-header>
        <!-- end links -->

        <div class="hidden lg:block">
          <a class="text-base btn btn-primary" href="#">Get Started</a>
        </div>

        <!--  hamburger menu-->
        <lbk-menu [(open)]="openModal"></lbk-menu>
        <!--  end hamburger menu-->
      </nav>
    </header>

    <!-- modal links -->
    <lbk-modal-links [(open)]="openModal"></lbk-modal-links>
    <!-- end modal links -->
  `,
})
export class HeaderComponent {
  openModal = true;
}
