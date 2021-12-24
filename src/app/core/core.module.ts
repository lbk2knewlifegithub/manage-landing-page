import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CopyrightComponent,
  FooterComponent,
  FooterLinksComponent,
  HeaderComponent,
  SocialComponent
} from './components';
import { InboxComponent } from './components/inbox.component';
import { AppComponent } from './containers';

const COMPONENTS = [
  // footer
  FooterComponent,
  FooterLinksComponent,
  SocialComponent,
  CopyrightComponent,
  InboxComponent,
  // header
  HeaderComponent,
];
const CONTAINERS = [AppComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [COMPONENTS, CONTAINERS],
})
export class CoreModule {}
