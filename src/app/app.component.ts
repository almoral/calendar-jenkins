import {Component, NgModule} from '@angular/core';
import {LoaderComponent} from "./loader/loader.component";


@Component({
  selector: 'mdc-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public loader = LoaderComponent;
}
