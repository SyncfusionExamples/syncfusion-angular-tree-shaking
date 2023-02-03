import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, GridAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
