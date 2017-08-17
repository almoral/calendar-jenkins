import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { CategoriesComponent } from './categories/categories.component';
import { ConfigurationService } from './configuration.service';
import { CategoriesService } from './categories.service';
import { CalendarDataService } from './calendar-data.service';
import {EventsDataService} from "./events-data.service";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    DatePickerComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    ConfigurationService,
    CategoriesService,
    CalendarDataService,
    EventsDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
