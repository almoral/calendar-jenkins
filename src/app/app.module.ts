import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ConfigurationService } from './shared/services/configuration.service';
import { CategoriesDataService } from './shared/services/categories-data.service';
import { EventDataService } from './shared/services/event-data.service';
import { DateService } from './shared/services/date.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { MDCCalendarComponent } from './calendar/calendar.component';
import { CalendarEventComponent } from './calendar-event/calendar-event.component';
import { CalendarEventDateComponent } from './calendar-event-date/calendar-event-date.component';
import { CalendarEventListComponent } from './calendar-event-list/calendar-event-list.component';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { CalendarFilterByTitleComponent } from './calendar-filter-by-title/calendar-filter-by-title.component';
import { CalendarFilterByCategoryComponent } from './calendar-filter-by-category/calendar-filter-by-category.component';
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
import {InitializeService} from './shared/services/initialize.service';
import { PhonePipe } from './shared/pipes/phone.pipe';
import { InternationalPhonePipe } from './shared/pipes/international-phone.pipe';
import { NgHttpLoaderServicesModule } from 'ng-http-loader/services/ng-http-loader-services.module';
import { NgHttpLoaderComponentsModule } from 'ng-http-loader/components/ng-http-loader-components.module';
import { LoaderComponent } from './loader/loader.component';
import { CalendarFilterByTypeComponent } from './calendar-filter-by-type/calendar-filter-by-type.component';
import {TypesDataService} from './shared/services/types-data.service';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { CalendarGridViewComponent } from './calendar-grid-view/calendar-grid-view.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { CalendarGridEventComponent } from './calendar-grid-event/calendar-grid-event.component';
import { CalendarListViewComponent } from './calendar-list-view/calendar-list-view.component';
import {NgxSmartModalModule} from 'ngx-smart-modal';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CalendarNavigationComponent } from './calendar-navigation/calendar-navigation.component';
import { MyDatePickerModule } from 'mydatepicker';


@NgModule({
  declarations: [
    AppComponent,
    MDCCalendarComponent,
    CalendarEventComponent,
    CalendarEventDateComponent,
    CalendarEventListComponent,
    CalendarHeaderComponent,
    CalendarFilterByTitleComponent,
    CalendarFilterByCategoryComponent,
    CalendarFilterByCalendarComponent,
    CalendarFilterContainerComponent,
    MessagesComponent,
    CheckboxGroupComponent,
    MdcPaginationComponent,
    PhonePipe,
    InternationalPhonePipe,
    LoaderComponent,
    CalendarFilterByTypeComponent,
    CalendarGridViewComponent,
    CalendarGridEventComponent,
    CalendarListViewComponent,
    CalendarNavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgHttpLoaderServicesModule,
    NgHttpLoaderComponentsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600, apiBase: 'api/calendar/ASD', passThruUnknownUrl: true}),
    AppRoutingModule,
    NgxPaginationModule,
    MaterializeModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollToModule.forRoot(),
    FullCalendarModule,
    NgxSmartModalModule.forRoot(),
    BrowserAnimationsModule,
    MyDatePickerModule
  ],
  providers: [
    ConfigurationService,
    CategoriesDataService,
    TypesDataService,
    EventService,
    EventDataService,
    DataStoreService,
    MessagesService,
    DateService,
    CalendarDataService,
    InitializeService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LoaderComponent
  ]
})
export class AppModule { }
