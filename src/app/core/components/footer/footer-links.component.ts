import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-footer-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">About Us</a></li>
    </ul>
    <ul>
      <li><a href="#">Careers</a></li>
      <li><a href="#">Community</a></li>
      <li><a href="#">Privacy Policy</a></li>
    </ul>
  `,
  styles: [
    `
      :host {
        @apply flex px-10 justify-between;

        ul {
          @apply space-y-3;

          li {
            a {
            }
          }
        }
      }
    `,
  ],
})
export class FooterLinksComponent {}
