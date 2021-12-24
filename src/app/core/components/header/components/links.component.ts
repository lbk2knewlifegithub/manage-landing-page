import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-links-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="hidden gap-8 font-medium lg:flex">
      <li><a routerLink="/">Pricing</a></li>
      <li><a routerLink="/">Product</a></li>
      <li><a routerLink="/">About Us</a></li>
      <li><a routerLink="/">Careers</a></li>
      <li><a routerLink="/">Community</a></li>
    </ul>
  `,
})
export class LinksComponent {}
