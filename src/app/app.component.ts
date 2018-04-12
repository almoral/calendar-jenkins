import {Component, NgModule} from '@angular/core';
import {LoaderComponent} from "./loader/loader.component";
import {InitializeService} from "./shared/services/initialize.service";


@Component({
  selector: 'mdc-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public loader = LoaderComponent;

  constructor(
    // hack to load the service independent of the route.
    private initializeService: InitializeService)
  {}


}
