import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DescComponent } from './desc/desc.component';
import { CounterComponent } from './counter/counter.component';
import { LettersComponent } from './letters/letters.component';
import { ButtonComponent } from './button/button.component';
import { WordsComponent } from './words/words.component';
import { PanelComponent } from './panel/panel.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    DescComponent,
    CounterComponent,
    LettersComponent,
    ButtonComponent,
    WordsComponent,
    PanelComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
