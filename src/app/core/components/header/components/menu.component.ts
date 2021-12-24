import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'lbk-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button (click)="onMenu()">
      <img id="menu" [src]="icon" [alt]="name" />
    </button>
  `,
})
export class MenuComponent {
  @Input() open!: boolean;
  @Output() openChange = new EventEmitter<boolean>();

  onMenu() {
    this.openChange.emit(!this.open);
  }

  get name(): string {
    return this.open ? 'close' : 'hamburger';
  }

  get icon(): string {
    return `/assets/images/icon-${this.name}.svg`;
  }
}
