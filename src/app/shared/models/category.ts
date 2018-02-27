/**
 * Created by almoral on 8/17/17.
 */
import * as tv4 from 'tv4';
import {Option} from "./option";

export class Category {

  public static schema = {
    'title': 'Option',
    'description': 'Schema to validate options.',
    'type': 'object',
    'required': ['id', 'label'],
    'properties': {
      'id': {
        'type': 'string'
      },
      'label': {
        'type': 'string'
      }
    }
  }



  /**
   * fromJson creates an instance of the Option object from
   * a json. If the json does not validate correctly, null is returned.
   * @param json - designed to be used with a json coming from a service.
   * @returns {any} if json validates returns an Option otherwise it will throw an error.
   */
  public static fromJSON(json: any): Option {

    if (Category.validateJson(json)) {
      return new Option(
        json.id,
        json.label
      );

    } else {
      console.error('fromJSON: invalid json to build option', json, tv4.error);
      throw new Error('error: invalid json to build option');
    }

  };

  /**
   * validateJson is design to validate the json that comes from
   * a service. For this object to be useful it needs to have
   * a value and a label.
   * @param json - object coming from a service.
   * @returns {boolean} - true when object contains value and label.
   * false otherwise.
   */
  private static validateJson(json: any): boolean {
    return tv4.validate(json, Category.schema);
  };


};
