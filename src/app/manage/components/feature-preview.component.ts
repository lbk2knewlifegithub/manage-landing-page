import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Feature } from '@lbk/manage/models';

@Component({
  selector: 'lbk-feature-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="lg:flex lg:gap-6">
      <!--  order desktop-->
      <div>
        <span
          class="badge-primary hidden lg:block"
          >{{ index | number: '2.0-0' }}</span
        >
      </div>
      <!--  end order desktop-->

      <div>
        <div
          class="flex justify-start items-center bg-primary-300 h-10 rounded-full lg:text-lg lg:bg-transparent"
        >
          <!--  order-->
          <span
            class="badge-primary h-full lg:hidden"
            >{{ index | number: '2.0-0' }}</span
          >
          <!--  end order-->

          <!-- name -->
          <strong class="ml-3 text-sm lg:ml-0 lg:text-lg">{{ feature.name }}</strong>
          <!-- end name -->
        </div>

        <!-- description -->
        <p class="mt-4 text-sm text-muted leading-7 md:text-base">{{ feature.description }}</p>
        <!-- end description -->
      </div>
    </div>
  `,
})
export class FeaturePreviewComponent {
  @Input() feature!: Feature;
  @Input() index!: number;
}
