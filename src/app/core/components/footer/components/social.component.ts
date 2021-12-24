import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-social',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="text-4xl flex justify-around">
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
})
export class SocialComponent {}
