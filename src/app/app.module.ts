import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { CategoriesComponent } from './categories/categories.component';
import { ConfigurationService } from './shared/services/configuration.service';
import { CategoriesService } from './shared/services/categories.service';
import { CalendarDataService } from './shared/services/calendar-data.service';
import {EventsDataService} from './shared/services/events-data.service';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { TestViewComponent } from './test-view/test-view.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DatePickerModule} from 'mdc-date';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    CategoriesComponent,
    TestViewComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    DatePickerModule
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
