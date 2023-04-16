import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ArithematicService } from './arithematic.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArithematicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
