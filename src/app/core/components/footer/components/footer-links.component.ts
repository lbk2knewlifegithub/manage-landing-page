import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-footer-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul>
      <li><a class="animated-link " routerLink="/">Home</a></li>
      <li><a class="animated-link " routerLink="/">Pricing</a></li>
      <li><a class="animated-link " routerLink="/">Products</a></li>
      <li><a class="animated-link " routerLink="/">About Us</a></li>
    </ul>
    <ul>
      <li><a class="animated-link " routerLink="/">Careers</a></li>
      <li><a class="animated-link " routerLink="/">Community</a></li>
      <li><a class="animated-link " routerLink="/">Privacy Policy</a></li>
    </ul>
  `,
  styles: [
    `
      :host {
        @apply flex px-10 justify-between lg:px-0;

        ul {
          @apply space-y-3;

          li {
            a {
              @apply text-muted font-semibold hover:text-white hover:tracking-normal;
            }
          }
        }
      }
    `,
  ],
})
export class FooterLinksComponent {}
