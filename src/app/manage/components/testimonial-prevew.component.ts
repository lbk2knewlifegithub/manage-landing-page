import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Testimonial } from '../models';

@Component({
  selector: 'lbk-testimonial-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!--  content-->
    <div
      class="mt-10 last:ml-6  relative bg-gray-100 rounded px-5 pb-6 flow-root rounded"
    >
      <div
        class="w-20 h-20 absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 transform"
      >
        <img class="rounded-full" [src]="testimonial.src" alt="Avatar" />
      </div>

      <p class="mt-16 text-skin-base text-center font-medium">
        {{ testimonial.name }}
      </p>

      <p class="mt-5 text-skin-muted text-center">
        "{{ testimonial.comment }}"
      </p>
    </div>
    <!--  content-->
  `,
})
export class TestimonialPreviewComponent {
  @Input() testimonial!: Testimonial;
}
