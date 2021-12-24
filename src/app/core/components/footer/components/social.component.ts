import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-social',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul data-aos="zoom-in">
      <li>
        <a routerLink="/"><span class="fab fa-facebook-square"></span></a>
      </li>
      <li>
        <a routerLink="/"><span class="fab fa-youtube"></span></a>
      </li>
      <li>
        <a routerLink="/"><span class="fab fa-twitter"></span></a>
      </li>
      <li>
        <a routerLink="/"><span class="fab fa-pinterest"></span></a>
      </li>
      <li>
        <a routerLink="/"><span class="fab fa-instagram"></span></a>
      </li>
    </ul>
  `,
  styles: [
    `
      ul {
        @apply text-4xl flex justify-around items-center lg:text-xl xl:text-3xl xl:gap-6;
        li {
          a {
            @apply duration-500 hover:text-primary;
          }
        }
      }
    `,
  ],
})
export class SocialComponent {}
