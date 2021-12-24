import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-intro',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container">
      <div
        class="flex flex-col justify-center items-center lg:flex-row lg:justify-between"
      >
        <!-- pattern -->
        <div class="max-w-xl lg:order-last">
          <img
            src="/assets/images/illustration-intro.svg"
            alt="Illustration Intro"
          />
        </div>
        <!-- end pattern -->

        <div class="max-w-md flex justify-center flex-col text-center lg:text-left">
          <!-- hero text -->
          <h1
            class="mt-6 text-3xl font-bold  tracking-wider lg:text-5xl lg:text-left"
          >
            Bring everyone together to build better products.
          </h1>
          <!-- end hero text -->

          <p class="text-muted mt-2 lg:text-lg lg:text-left">
            Manager makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>

          <!--    get started-->
          <div class="mt-10 mx-auto lg:ml-0">
            <a class="btn btn-primary" href="#">Get started</a>
          </div>
          <!--    end get started-->
        </div>
      </div>
    </div>
  `,
})
export class IntroComponent {}
