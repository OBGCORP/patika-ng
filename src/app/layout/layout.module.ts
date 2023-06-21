import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    ExponentialStrengthPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
