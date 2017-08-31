import {Component, Input, OnInit} from '@angular/core';
import {CategoriesService} from "../shared/services/categories.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  // public categories: Array<any> = [];

  @Input()  categories: Array<Object>;

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe((items) => {
      this.categories = items;
    })
  }

}
