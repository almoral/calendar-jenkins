export class Calendar {
  public value: string;
  public label: string;

  constructor(value: string,
              label: string
  ) {

    this.value = value || '';
    this.label = label || '';
  }

}
