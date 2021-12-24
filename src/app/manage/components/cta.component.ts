import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-cta',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative text-white bg-primary py-32 lg:py-20">
      <!--    Background mobile-->
      <img
        class="absolute top-0 left-0 h-full lg:hidden"
        src="/assets/images/bg-simplify-section-mobile.svg"
        alt="Background"
      />
      <!--    end Background mobile-->

      <!--    Background desktop-->
      <img
        class="absolute top-0 left-0 h-full w-full hidden lg:block"
        src="/assets/images/bg-simplify-section-desktop.svg"
        alt="Background"
      />
      <!--    end [ sBackground desktop-->

      <div
        class="relative container grid gap-8 place-items-center lg:grid-cols-2"
      >
        <h2
          data-aos="slide-left"
          class="text-inverted font-bold text-4xl text-center lg:text-4xl lg:text-left"
        >
          Simplify how your team <br class="hidden lg:inline" />
          works todays.
        </h2>

        <!-- get started button -->
        <div data-aos="slide-right" class="lg:justify-self-end">
          <a class="btn btn-primary-inverted text-primary" href="#"
            >Get started</a
          >
        </div>
        <!-- end get started button -->
      </div>
    </div>
  `,
})
export class CtaComponent {}
