import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { fromFooter, fromHeader } from './components';
import { AppComponent } from './containers';

const COMPONENTS = [fromFooter.COMPONENTS, fromHeader.COMPONENTS];
const CONTAINERS = [AppComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [COMPONENTS, CONTAINERS],
})
export class CoreModule {}
