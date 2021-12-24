import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Testimonial } from '../models';

@Component({
  selector: 'lbk-testimonial-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!--  content-->
    <div class="relative mt-20 bg-muted rounded-sm px-5 pb-10 flow-root">
      <!-- avatar -->
      <div
        class="w-20 h-20 absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 duration-500 hover:scale-110"
      >
        <img class="rounded-full" [src]="testimonial.src" alt="Avatar" />
      </div>
      <!-- avatar -->

      <!-- name -->
      <p class="mt-16 text-lg  text-center font-bold tracking-wide">
        {{ testimonial.name }}
      </p>
      <!-- end name -->

      <!-- comment -->
      <p class="mt-5 text-muted text-center">"{{ testimonial.comment }}"</p>
      <!-- end comment -->
    </div>
    <!--  content-->
  `,
})
export class TestimonialPreviewComponent {
  @Input() testimonial!: Testimonial;
}
