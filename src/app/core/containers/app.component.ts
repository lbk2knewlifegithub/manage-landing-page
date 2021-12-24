import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'lbk-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <lbk-header></lbk-header>

    <router-outlet></router-outlet>

    <!--footer-->
    <lbk-footer></lbk-footer>
    <!--end footer-->
  `,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
}
