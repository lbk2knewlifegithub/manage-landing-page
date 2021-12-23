import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-intro',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container">
      <div
        class="mt-20 flex flex-col justify-center items-center lg:flex-row lg:justify-between"
      >
        <div class="max-w-xl lg:order-last">
          <img
            src="/assets/images/illustration-intro.svg"
            alt="Illustration Intro"
          />
        </div>

        <div class="max-w-md flex justify-center flex-col lg:text-left">
          <h1
            class="text-skin-base mt-6 text-3xl font-bold text-center text-gray-900 lg:text-5xl lg:text-left"
          >
            Bring everyone together to build better products.
          </h1>
          <p class="text-skin-muted text-center mt-6 lg:text-lg lg:text-left">
            Manager makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>

          <!--    get started-->
          <div class="mt-10 mx-auto shake-little lg:ml-0">
            <a class="btn btn-primary" href="#">Get started</a>
          </div>
          <!--    end get started-->
        </div>
      </div>
    </div>
  `,
})
export class IntroComponent {}
