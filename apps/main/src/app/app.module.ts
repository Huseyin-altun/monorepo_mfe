import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiModule } from 'libs/ui/src';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
