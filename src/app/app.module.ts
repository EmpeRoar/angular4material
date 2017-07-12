import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdButtonModule, MdCheckboxModule, MdListModule, MdTabsModule, MdChipsModule, MdProgressBarModule, MdDialogModule} from '@angular/material';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ BrowserModule, BrowserAnimationsModule, MdButtonModule, MdCheckboxModule, MdListModule, MdTabsModule, MdChipsModule,MdProgressBarModule,MdDialogModule ],
  exports: [MdButtonModule, MdCheckboxModule,MdListModule, MdTabsModule, MdChipsModule, MdProgressBarModule, MdDialogModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
