import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Feature } from '@lbk/manage/models';

@Component({
  selector: 'lbk-feature-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <section
        class="flex justify-start items-center bg-skin-bg-muted h-10 rounded-full lg:text-lg"
      >
        <!--  numbers-->
        <span
          class="px-5 leading-10 bg-primary  rounded-full text-white font-bold h-full bg-skin-primary"
          >{{ index | number: '2.0-0' }}</span
        >
        <!--  end numbers-->
        <strong class="ml-3 text-skin-base">{{ feature.name }}</strong>
      </section>

      <p class="mt-4 text-skin-muted">{{ feature.description }}</p>
    </div>
  `,
})
export class FeaturePreviewComponent {
  @Input() feature!: Feature;
  @Input() index!: number;
}
