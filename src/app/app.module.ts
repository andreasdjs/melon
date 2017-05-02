import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MelonHeaderComponent } from './melon-header/melon-header.component';
import { MelonTitleComponent } from './melon-title/melon-title.component';

@NgModule({
  declarations: [
    AppComponent,
    MelonHeaderComponent,
    MelonTitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
