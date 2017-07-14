import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { routing } from './app.router';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventFormComponent } from './event-form/event-form.component';

import { LocalStorageModule } from 'angular-2-local-storage';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
