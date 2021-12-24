import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  CarouselComponent,
  OwlOptions,
  SlidesOutputData
} from 'ngx-owl-carousel-o';
import { Testimonial } from '../models';

@Component({
  selector: 'lbk-testimonial-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="">
      <div class="">
        <!--  title-->
        <h2 data-aos="zoom-in" class="text-3xl font-bold text-center lg:text-4xl">
          What they've said
        </h2>
        <!--  end title-->

        <!--  carousel-->
        <div class="space-y-6 container-large lg:mt-12">
          <owl-carousel-o
            #owl
            (translated)="onOwlChange($event)"
            class="block"
            [options]="customOptions"
          >
            <ng-container *ngFor="let testimonial of testimonials">
              <ng-template carouselSlide>
                <lbk-testimonial-preview
                  class="block mx-4"
                  [testimonial]="testimonial"
                ></lbk-testimonial-preview>
              </ng-template>
            </ng-container>
          </owl-carousel-o>

          <!-- dots -->
          <div class="flex gap-2 justify-center md:hidden">
            <ng-container *ngFor="let testimonial of testimonials; index as i">
              <button
                (click)="moveTo(i)"
                [ngClass]="{ 'bg-primary': isActive(i) }"
                class="duration-700 w-3 h-3 border border-primary rounded-full hover:bg-primary/40"
              ></button>
            </ng-container>
          </div>
          <!-- end dots -->
        </div>
        <!--  end carousel-->

        <!--  get started-->
        <div data-aos="zoom-in" class="mt-8 grid place-items-center lg:mt-14">
          <a class="btn btn-primary " href="#">Get Started</a>
        </div>
        <!--  end get started-->
      </div>
    </div>
  `,
})
export class TestimonialListComponent implements OnInit {
  @Input() testimonials!: Testimonial[];
  @ViewChild('owl', { static: true }) owl!: CarouselComponent;
  currentSlide = 0;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1280: {
        items: 3,
      },
    },
  };

  ngOnInit(): void {
    setTimeout(() => {}, 100);
  }

  moveTo(index: number) {
    this.owl.to(`owl-slide-${index}`);
  }

  isActive(index: number) {
    return this.currentSlide === index;
  }

  onOwlChange(event: SlidesOutputData) {
    this.currentSlide = event.startPosition ?? 0;
  }
}
