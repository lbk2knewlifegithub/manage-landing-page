import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fuck',
  template: `
    <!--  simplify -->
    <div class="relative bg-skin-primary py-20 lg:py-40">
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

      <section
        class="relative container lg:flex lg:justify-between lg:items-center "
      >
        <h2
          class="text-skin-inverted font-bold text-3xl text-center lg:text-4xl lg:text-left"
        >
          Simplify how your team<br class="hidden lg:inline" />
          works todays.
        </h2>

        <div class="mt-10 mx-auto flex justify-center lg:mt-0 md:mr-0 lg:mr-10">
          <a class="btn btn-primary-inverted" href="#">Get started</a>
        </div>
      </section>
    </div>
    <!--  end end simplify -->
  `,
})
export class NameComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
