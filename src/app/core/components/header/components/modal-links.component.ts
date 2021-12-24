import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { listAnimation } from '@lbk/shared/animations';
import { UnsubscribeComponent } from '@lbk/shared/components';
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  zoomInOnEnterAnimation,
  zoomOutLeftOnLeaveAnimation
} from 'angular-animations';
import { debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'lbk-modal-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!--navbar mobile-->
    <div
      @fadeInOnEnter
      @fadeOutOnLeave
      *ngIf="open"
      class="modal-links fixed top-0 left-0 w-full h-full bg-black/10 pointer-events-none z-40"
    >
      <div
        @zoomInOnEnter
        @zoomOutLeftOnLeave
        class="container mt-32 pointer-events-auto max-w-md mx-auto"
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
export class ModalLinksComponent
  extends UnsubscribeComponent
  implements OnInit
{
  @Input() open!: boolean;
  @Output() openChange = new EventEmitter<boolean>();

  constructor(private readonly _cd: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.appendSub = fromEvent(window, 'scroll')
      .pipe(debounceTime(200))
      .subscribe(() => {
        if (this.open) this.close();
      });

    this.appendSub = fromEvent(window, 'click').subscribe((event: Event) => {
      const target = event.target as HTMLElement;
      const matched = target.matches('#menu');
      if (matched) return;

      const closest = target.closest('.modal-links');
      if (!closest && this.open) this.close();
    });
  }

  onLink() {}

  close() {
    this.open = false;
    this._cd.markForCheck();

    setTimeout(() => {
      this.openChange.emit(false);
    }, 1990);
  }
}
