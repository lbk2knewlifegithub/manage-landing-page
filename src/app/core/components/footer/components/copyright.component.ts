import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-copyright',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <p class="text-sm text-center text-muted">
        Copyright 2020. All Rights Reserved
      </p>

      <!-- front end mentor -->
      <p class="text-xs text-center text-muted">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          >Frontend Mentor</a
        >. Coded by
        <a
          class="text-sky-600 decoration-wavy"
          href="https://github.com/lbk2knewlifegithub"
          >lbk2k</a
        >.
      </p>
      <!-- end front end mentor -->
    </div>
  `,
})
export class CopyrightComponent {}
