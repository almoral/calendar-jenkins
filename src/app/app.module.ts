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
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { TestViewComponent } from './test-view/test-view.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DatePickerModule} from 'mdc-date';
import { CalendarEventComponent } from './calendar-event/calendar-event.component';
import { CalendarEventDateComponent } from './calendar-event-date/calendar-event-date.component';
import { CalendarEventListComponent } from './calendar-event-list/calendar-event-list.component';
import { HeaderComponent } from './header/header.component';
import { DateFilterComponent } from './date-filter/date-filter.component';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { CalendarFiltersComponent } from './calendar-filters/calendar-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    CategoriesComponent,
    TestViewComponent,
    CalendarComponent,
    CalendarEventComponent,
    CalendarEventDateComponent,
    CalendarEventListComponent,
    HeaderComponent,
    DateFilterComponent,
    CheckboxGroupComponent,
    SearchBoxComponent,
    CalendarFiltersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
