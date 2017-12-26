import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ConfigurationService } from './shared/services/configuration.service';
import { CategoriesDataService } from './shared/services/categories-data.service';
import { EventDataService } from './shared/services/event-data.service';
import { DateService } from './shared/services/date.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarEventComponent } from './calendar-event/calendar-event.component';
import { CalendarEventDateComponent } from './calendar-event-date/calendar-event-date.component';
import { CalendarEventListComponent } from './calendar-event-list/calendar-event-list.component';
import { CalendarDateFilterComponent } from './calendar-date-filter/calendar-date-filter.component';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { CalendarFilterByTitleComponent } from './calendar-filter-by-title/calendar-filter-by-title.component';
import { CalendarFilterByTypeComponent } from './calendar-filter-by-category/calendar-filter-by-category.component';
import { CalendarFilterByCalendarComponent } from './calendar-filter-by-calendar/calendar-filter-by-calendar.component';
import { CalendarFilterContainerComponent } from './calendar-filter-container/calendar-filter-container.component';
import { NgxPaginationModule} from 'ngx-pagination';
import { MaterializeModule } from 'angular2-materialize';
import {EventService} from './shared/services/event.service';
import {DataStoreService} from './shared/services/data-store.service';
import { MessagesComponent } from './messages/messages.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MessagesService} from './shared/services/messages.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './shared/services/in-memory-data.service';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { MdcPaginationComponent } from './mdc-pagination/mdc-pagination.component';
import {CalendarDataService} from './shared/services/calendar-data.service';
import {FilterService} from './shared/services/filter.service';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarEventComponent,
    CalendarEventDateComponent,
    CalendarEventListComponent,
    CalendarDateFilterComponent,
    CalendarHeaderComponent,
    CalendarFilterByTitleComponent,
    CalendarFilterByTypeComponent,
    CalendarFilterByCalendarComponent,
    CalendarFilterContainerComponent,
    MessagesComponent,
    CheckboxGroupComponent,
    MdcPaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600, apiBase:'api/calendar/ASD', passThruUnknownUrl: true}),
    AppRoutingModule,
    NgxPaginationModule,
    MaterializeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ConfigurationService,
    CategoriesDataService,
    EventService,
    EventDataService,
    DataStoreService,
    MessagesService,
    DateService,
    CalendarDataService,
    FilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
