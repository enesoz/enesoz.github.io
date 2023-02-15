import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {MyCvModule} from "./my-cv/my-cv.module";

@NgModule({
  declarations: [
    AppComponent ,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MyCvModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
