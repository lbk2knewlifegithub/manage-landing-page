import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-testimonial-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container">
      <div class="px-6 flex flex-col justify-center aligns-center">
        <!--  title-->
        <h2 class="text-skin-base text-2xl font-bold text-center lg:text-4xl">
          What they've said
        </h2>
        <!--  end title-->

        <!--  carousel-->
        <!-- <owl-carousel-o class="block mt-10" [options]="customOptions">
          <ng-container *ngFor="let customer of customers">
            <ng-template carouselSlide> </ng-template>
          </ng-container>
        </owl-carousel-o> -->
        <!--  end carousel-->

        <!--  get started-->
        <a class="mt-8 btn btn-primary mx-auto" href="#">Get Started</a>
        <!--  end get started-->
      </div>
    </div>
  `,
})
export class TestimonialListComponent {}
