import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-copyright',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="text-sm text-muted text-center lg:text-right">
      <p>Copyright 2020. All Rights Reserved</p>

      <!-- front end mentor -->
      <p class="text-xs">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          >Frontend Mentor</a
        >. Coded by
        <a
          class="text-sky-600 decoration-red-900 decoration-wavy"
          href="https://github.com/lbk2knewlifegithub"
          >lbk2k</a
        >.
      </p>
      <!-- end front end mentor -->
    </div>
  `,
})
export class CopyrightComponent {}
