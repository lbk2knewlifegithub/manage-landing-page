import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-links-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="flex gap-8 font-medium text-muted">
      <li><a class="animated-link" routerLink="/">Pricing</a></li>
      <li><a class="animated-link" routerLink="/">Product</a></li>
      <li><a class="animated-link" routerLink="/">About Us</a></li>
      <li><a class="animated-link" routerLink="/">Careers</a></li>
      <li><a class="animated-link" routerLink="/">Community</a></li>
    </ul>
  `,
  styles: [
    `
      ul {
        li {
          a {
            @apply hover:tracking-normal hover:text-fill;
          }
        }
      }
    `,
  ],
})
export class LinksComponent {}
