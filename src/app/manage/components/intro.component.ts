import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  slideInLeftAnimation,
  slideInLeftOnEnterAnimation,
  slideInRightAnimation,
  slideInRightOnEnterAnimation
} from 'angular-animations';

@Component({
  selector: 'lbk-intro',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative container">
      <div
        class="grid place-content-center place-items-center gap-8 lg:grid-cols-2 lg:place-items-start"
      >
        <!-- pattern -->
        <div @slideInRightOnEnter class="max-w-xl lg:order-last">
          <img
            src="/assets/images/illustration-intro.svg"
            alt="Illustration Intro"
          />
        </div>
        <!-- end pattern -->

        <div
          @slideInLeftOnEnter
          class="max-w-lg grid place-content-center gap-10 text-center lg:text-left lg:place-items-start lg:mt-10 lg:gap-20"
        >
          <div>
            <!-- hero text -->
            <h1
              class="text-3xl font-bold tracking-wide lg:text-left sm:text-4xl xl:text-5xl"
            >
              Bring everyone together to build better products.
            </h1>
            <!-- end hero text -->

            <p class="text-muted mt-2  lg:max-w-sm lg:mt-4">
              Manager makes it simple for software teams to plan day-to-day
              tasks while keeping the larger team goals in view.
            </p>
          </div>

          <!--    get started-->
          <div>
            <a class="btn btn-primary" routerLink="/">Get started</a>
          </div>
          <!--    end get started-->
        </div>
      </div>
    </div>
  `,
  animations: [
    slideInLeftOnEnterAnimation(),
    slideInRightOnEnterAnimation(),
  ],
})
export class IntroComponent {}
