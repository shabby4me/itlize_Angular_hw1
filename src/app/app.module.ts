import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Timer } from './Timer/Timer.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {myAutoFocus} from './myAutoFocus/myAutoFocus.component';

@NgModule({
  declarations: [
    AppComponent,
    Timer,
    myAutoFocus
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
