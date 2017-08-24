import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../shared/services/categories.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe((item) => {
      console.log('CATEGORIES: ', item);
    })
  }

}
