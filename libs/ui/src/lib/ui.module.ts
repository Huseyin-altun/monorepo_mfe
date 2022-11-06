import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, CardComponent],
  exports: [HeaderComponent, CardComponent],
})
export class UiModule {}
