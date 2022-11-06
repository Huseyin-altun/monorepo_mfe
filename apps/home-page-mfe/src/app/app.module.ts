import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from '@mf/header';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,HeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
