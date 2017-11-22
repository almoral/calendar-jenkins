import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ConfigurationService } from './shared/services/configuration.service';
import { CategoriesService } from './shared/services/categories.service';
import { EventDataService } from './shared/services/event-data.service';
import { DateService } from './shared/services/date.service';
// import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarEventComponent } from './calendar-event/calendar-event.component';
import { CalendarEventDateComponent } from './calendar-event-date/calendar-event-date.component';
import { CalendarEventListComponent } from './calendar-event-list/calendar-event-list.component';
import { CalendarDateFilterComponent } from './calendar-date-filter/calendar-date-filter.component';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { CalendarSearchBoxComponent } from './calendar-search-box/calendar-search-box.component';
import { CalendarFilterByTypeComponent } from './calendar-filter-by-type/calendar-filter-by-type.component';
import { CalendarFilterByDepartmentComponent } from './calendar-filter-by-department/calendar-filter-by-department.component';
import { CalendarFilterContainerComponent } from './calendar-filter-container/calendar-filter-container.component';
import { NgxPaginationModule} from 'ngx-pagination';
import { MaterializeModule } from 'angular2-materialize';
import {EventService} from './shared/services/event.service';
import {DataStoreService} from './shared/services/data-store.service';
import { MessagesComponent } from './messages/messages.component';
import {FormsModule} from '@angular/forms';
import {MessagesService} from './shared/services/messages.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './shared/services/in-memory-data.service';



@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarEventComponent,
    CalendarEventDateComponent,
    CalendarEventListComponent,
    CalendarDateFilterComponent,
    CalendarHeaderComponent,
    CalendarSearchBoxComponent,
    CalendarFilterByTypeComponent,
    CalendarFilterByDepartmentComponent,
    CalendarFilterContainerComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600, apiBase:'api/calendar/ASD', passThruUnknownUrl: true}),
    AppRoutingModule,
    NgxPaginationModule,
    MaterializeModule,
    FormsModule
  ],
  providers: [
    ConfigurationService,
    CategoriesService,
    EventService,
    EventDataService,
    DataStoreService,
    MessagesService,
    DateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
