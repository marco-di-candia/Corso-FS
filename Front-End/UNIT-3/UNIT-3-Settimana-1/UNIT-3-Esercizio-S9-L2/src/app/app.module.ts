import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentNewComponent } from './components/component-new/component-new.component';
import { ComponentNew1Component } from './components/component-new1/component-new1.component';
import { ComponentNew2Component } from './components/component-new2/component-new2.component';
import { ComponentNew3Component } from './components/component-new3/component-new3.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentNewComponent,
    ComponentNew1Component,
    ComponentNew2Component,
    ComponentNew3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
