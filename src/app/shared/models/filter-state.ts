export class FilterState {

  public dateFilterOpen: boolean;
  public titleFilterOpen: boolean;
  public categoryFilterOpen: boolean;
  public calendarFilterOpen: boolean;

  constructor() {}

  public openDateFilter(open: boolean) {
    this.dateFilterOpen = open;
  }

  public openTitleFilter(open: boolean) {
    this.titleFilterOpen = open;
  }

  public openCategoryFilter(open: boolean) {
    this.categoryFilterOpen = open;
  }

  public openCalendarFilter(open: boolean) {
    this.calendarFilterOpen = open;
  }

  public openAll() {
    this.setFiltersState(true, true, true, true);
  }

  public getFiltersState() {
    return {
      dateFilterState: this.dateFilterOpen,
      titleFilterState: this.titleFilterOpen,
      categoryFilterState: this.categoryFilterOpen,
      calendarFilterState: this.calendarFilterOpen
    };
  }

  public setFiltersState(dateFilter: boolean, titleFilter: boolean, categoryFilter: boolean, calendarFilter: boolean) {
    this.openDateFilter(dateFilter);
    this.openTitleFilter(titleFilter);
    this.openCategoryFilter(categoryFilter);
    this.openCalendarFilter(calendarFilter);

  }

}

