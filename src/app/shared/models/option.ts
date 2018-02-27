/**
 * Created by almoral on 8/17/17.
 */

export class Option {
  public value: string;
  public label: string;


  constructor(value: string,
              label: string) {
    this.value = value || '';
    this.label = label || '';
  }


};
