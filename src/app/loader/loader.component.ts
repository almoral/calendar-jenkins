import { Component, OnInit } from '@angular/core';
import {AbstractLoader} from "ng-http-loader/components/abstract.loader.component";

@Component({
  selector: 'mdc-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent extends AbstractLoader {
}
