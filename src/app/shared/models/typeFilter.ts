/**
 * Created by almoral on 8/17/17.
 */
import * as tv4 from 'tv4';

export class TypeFilter {
  public value: string;
  public label: string;
  public selected: boolean;


  public static schema = {
    'title': 'TypeFilter',
    'description': 'Schema to validate categories.',
    'type': 'object',
    'required': ['value', 'label'],
    'properties': {
      'value': {
        'type': 'string'
      },
      'label': {
        'type': 'string'
      },
      'selected': {
        'type': 'boolean'
      }
    }
  };


  constructor(value: string,
              label: string,
              selected: boolean
  ) {

    this.value = value || '';
    this.label = label || '';
    this.selected = selected || false;
  }


  /**
   * fromJson creates an instance of the MDCEvent object from
   * a json. If the json does not validate correctly, null is returned.
   * @param json - designed to be used with a json coming from a service.
   * @returns {any} if json validates returns an MDCEvent otherwise it returns null.
   */
  public static fromJSON(json: any): TypeFilter {

    return new TypeFilter(
      json.value,
      json.label,
      false
    );



  };

  /**
   * validateJson is design to validate the json that comes from
   * a service. For this object to be useful it needs to have
   * an id, languageCode and label.
   * @param json - object coming from a service.
   * @returns {boolean} - true when object contains id, languageCode and label.
   * false otherwise.
   */
  private static validateJson(json: any): boolean {
    return tv4.validate(json, TypeFilter.schema);
  };

};
