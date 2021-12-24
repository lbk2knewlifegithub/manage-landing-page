import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { listAnimation } from '@lbk/shared/animations';
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  zoomInOnEnterAnimation,
  zoomOutLeftOnLeaveAnimation
} from 'angular-animations';

@Component({
  selector: 'lbk-modal-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!--navbar mobile-->
    <div
      @fadeInOnEnter
      @fadeOutOnLeave
      (@fadeOutOnLeave.done)="animationDone()"
      *ngIf="open"
      class="fixed top-0 left-0 w-full h-full bg-black/10 z-40"
    >
      <div
        @zoomInOnEnter
        @zoomOutLeftOnLeave
        class="container mt-32 pointer-events-auto max-w-md"
      >
        <!--    links-->
        <ul
          [@listAnimation]="open"
          class="flex flex-col items-center w-full py-10 space-y-6 rounded bg-white font-bold tracking-wide"
        >
          <li>
            <a (click)="onLink()" class="animated-link" routerLink="/"
              >Pricing</a
            >
          </li>
          <li>
            <a (click)="onLink()" class="animated-link" routerLink="/"
              >Product</a
            >
          </li>
          <li>
            <a (click)="onLink()" class="animated-link" routerLink="/"
              >About Us</a
            >
          </li>
          <li>
            <a (click)="onLink()" class="animated-link" routerLink="/"
              >Careers</a
            >
          </li>
          <li>
            <a (click)="onLink()" class="animated-link" routerLink="/"
              >Community</a
            >
          </li>
        </ul>
        <!--    end links-->
      </div>
    </div>
    <!--end navbar mobile-->
  `,
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation({ delay: 1700 }),
    zoomInOnEnterAnimation({ delay: 300 }),
    zoomOutLeftOnLeaveAnimation({ delay: 1400 }),
    listAnimation({ delayEnter: 600 }),
  ],
})
export class ModalLinksComponent {
  @Input() open!: boolean;
  @Output() openChange = new EventEmitter<boolean>();

  linkSelected = false;

  animationDone() {
    if (this.linkSelected) this.openChange.emit(false);

    this.linkSelected = false;
  }

  onLink() {
    this.linkSelected = true;
    this.open = false;
  }
}
