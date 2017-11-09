import * as tv4 from "tv4";
import * as tv4format from "tv4-formats";
import * as _ from "lodash";



export class MdcEventAddress {
  location: string;
  address1: string;
  address2: string;
  city:     string;
  state:    string;
  zip:      string;

  constructor(location = '',
              address1 = '',
              address2 = '',
              city = '',
              state = '',
              zip = ''){
    this.location = location || '';
    this.address1 = address1 || '';
    this.address2 = address2 || '';
    this.city = city || '';
    this.state = state || '';
    this.zip = zip || '';

  }
}

export class MdcEvent {
  public id: number;
  public odataId: string;
  public title: string;
  public startDate: Date;
  public endDate: Date;
  public isAllDayEvent: boolean;
  public isRecurringEvent: boolean;
  public recurrence: Date[];
  public categories: string [];
  public type: string;
  public shortDescription: string;
  public longDescription: string;
  public contactName: string;
  public contactPhone: string;
  public contactEmail: string;
  public adaName: string;
  public adaPhone: string;
  public adaEmail: string;
  public isClosedToMedia: boolean;
  public isClosedToPublic: boolean;
  public isFree: boolean;
  public fee: number;
  public rsvp: string;
  public url: object;
  public address: MdcEventAddress;


  public static schema = {
    'title': 'MDCEvent',
    'description': 'Schema to validate event retrieved from Sharepoint.',
    'type': 'object',
    'required': ['id', 'title', 'type', 'startDate', 'endDate',
      'contactName', 'contactPhone', 'contactEmail',
      'adaName', 'adaPhone', 'adaEmail'],
    'properties': {
      'id': {
        'type': 'number'
      },
      'title': {
        'type': 'string'
      },
      'type': {
        'type': 'string'
      },
      'startDate': {
        'type': 'string',
        'format': 'date-time'
      },
      'endDate': {
        'type': 'string',
        'format': 'date-time'
      },
      'contactName': {
        'type': 'string'
      },
      'contactPhone': {
        'type': 'string'
      },
      'contactEmail': {
        'type': 'string',
        'format': 'email'
      },
      'adaName': {
        'type': 'string'
      },
      'adaPhone': {
        'type': 'string'
      },
      'adaEmail': {
        'type': 'string',
        'format': 'email'
      },
      'isRecurringEvent': {
        'type': ['boolean', 'null']
      },
      'recurrence': {
        'type': ['array', 'null'],
        'items': {
          'type': 'string'
        }
      },
      'isAllDayEvent': {
        'type': ['boolean', 'null']
      },
      'shortDescription': {
        'type': ['string', 'null']
      },
      'longDescription': {
        'type': ['string', 'null']
      },
      'isClosedToMedia': {
        'type': ['boolean', 'null']
      },
      'isClosedToPublic': {
        'type': ['boolean', 'null']
      },
      'isFree': {
        'type': ['boolean', 'null']
      },
      'fee': {
        'type': ['number', 'null']
      },
      'rsvp': {
        'type': ['string', 'null']
      },
      'url': {
        'type': 'object',
        'properties': {
          'description': {
            'type': ['string', 'null']
          },
          'url': {
            'type': ['string', 'null'],
            'format': 'url'
          }
        }
      },
      'categories': {
        'type': ['array', 'null'],
        'items': {
          'type': 'string'
        }
      },
      'address': {
        'type': ['object', 'null'],
        'properties': {
          'location': {
            'type': ['string', 'null']
          },
          'address1': {
            'type': ['string', 'null']
          },
          'address2': {
            'type': ['string', 'null']
          },
          'city': {
            'type': ['string', 'null']
          },
          'state': {
            'type': ['string', 'null']
          },
          'zip': {
            'type': ['string', 'null']
          }
        }
      },

    }
  }


  constructor(id: number,
              odataId: string,
              title: string,
              startDate: Date,
              endDate: Date,
              isRecurringEvent: boolean,
              recurrence: Date[],
              isAllDayEvent: boolean,
              categories: string [],
              type: string,
              shortDescription: string,
              longDescription: string,
              contactName: string,
              contactPhone: string,
              contactEmail: string,
              adaName: string,
              adaPhone: string,
              adaEmail: string,
              isClosedToMedia: boolean,
              isClosedToPublic: boolean,
              isFree: boolean,
              fee: number,
              rsvp: string,
              url: object,
              address: MdcEventAddress) {

    this.id = id || null;
    this.odataId = odataId || '';
    this.title = title || '';
    this.startDate = startDate || null;
    this.endDate = endDate || null;
    this.isRecurringEvent = isRecurringEvent || false;
    this.recurrence = recurrence || null;
    this.isAllDayEvent = isAllDayEvent || false;
    this.categories = categories || [];
    this.type = type || '';
    this.shortDescription = shortDescription || '';
    this.longDescription = longDescription || '';
    this.contactName = contactName || '';
    this.contactPhone = contactPhone || '';
    this.contactEmail = contactEmail || '';
    this.adaName = adaName || '';
    this.adaPhone = adaPhone || '';
    this.adaEmail = adaEmail || '';
    this.isClosedToMedia = isClosedToMedia || false;
    this.isClosedToPublic = isClosedToPublic || false;
    this.isFree = isFree || true;
    this.fee = fee || null;
    this.rsvp = rsvp || '';
    this.url = url || {};
    this.address = address || new MdcEventAddress();
  }


  /**
   * fromJson creates an instance of the MdcEvent object from
   * a json. If the json does not validate correctly, an Error is thrown.
   * @param json - designed to be used with a json coming from a service.
   * @returns {any} if json validates returns an MdcEvent otherwise it throws an error.
   */
  public static fromJSON(json: any): MdcEvent {
    if (MdcEvent.validateJson(json)) {

      // get address
      let address = new MdcEventAddress(
        json.address && json.address.location,
        json.address && json.address.address1,
        json.address && json.address.address2,
        json.address && json.address.city,
        json.address && json.address.state,
        json.address && json.address.zip
      );

      return new MdcEvent(
        json.id,
        json.odataId,
        json.title,
        new Date(json.startDate),
        new Date(json.endDate),
        json.isRecurringEvent,
        MdcEvent.fromJSONRecurrence(json.recurrence),
        json.isAllDayEvent,
        json.categories,
        json.type,
        json.shortDescription,
        json.longDescription,
        json.contactName,
        json.contactPhone,
        json.contactEmail,
        json.adaName,
        json.adaPhone,
        json.adaEmail,
        json.isClosedToMedia,
        json.isClosedToPublic,
        json.isFree,
        json.fee,
        json.rsvp,
        json.url,
        address
      )}
    else {
      console.error('error: invalid json to build event', json);
      throw new Error('error: invalid json to build event');
    }


  };


  /**
   * fromJSONArray translates an array of json objects into an array of
   * MdcEvent objects. If one of objects in the imput array does not match
   * the schema of MdcEvent, it is skipped.
   * @param jsonArray - designed to be used with a json array coming from a service.
   * @returns {any} - Array of MdcEvent objects.
   */
  public static fromJSONArray(jsonArray: Array<any> = []): Array<MdcEvent> {

    // no input array is mapped it to an empty array
    if (_.isEmpty(jsonArray)) {
      return [];
    }

    // map each element of the jsonArray
    const events: Array<MdcEvent> = jsonArray.reduce(function (accumulator, item) {

      try{
        accumulator.push(MdcEvent.fromJSON(item));
      } catch(error){
        // skip elements which do not conform to the schema
      }

      return accumulator;

    }, []);

    return events;
  }

  /**
   * fromJSONRecurrence translates an array of json strings into an array of
   * Date objects. If one of strings in the imput array can not be converted to
   * a Date, it is skipped.
   * @param jsonRecurrence - the array of strings to be converted to dates.
   * @returns {any} - converted array of dates
   */
  public static fromJSONRecurrence(jsonRecurrence: Array<string>): Array<Date>{

    // no input array is mapped it to an empty array
    if (_.isEmpty(jsonRecurrence)) {
      return [];
    }

    // map each element of the jsonRecurrence from string to date.
    // and ignores those strings which can not be coverted to a date.
    const recurrenceDates: Array<Date> = jsonRecurrence.reduce(function (accumulator, item) {
      let recurrenceDate = new Date(item);

      if(!isNaN( recurrenceDate.getTime() )){
        accumulator.push(recurrenceDate);
      }

      return accumulator;

    }, []);

      return recurrenceDates;

  }

  /**
   * validateJson is design to validate the json that comes from
   * a service against MdcEvent.schema.
   * @param json - object coming from a service.
   * @returns {boolean} - true if schema validation passes against MdcEvent.schema.
   * false otherwise.
   */
  public static validateJson(json: any): boolean {
    tv4.addFormat(tv4format);
    return tv4.validate(json, MdcEvent.schema);
  };





};


/**
 * MdcEventsByDate has a date and
 * a collection of events that fall within that date.
 * It is a way to group all events in a specific date, with
 * explicit access to the date in question.
 */
export interface MdcEventsByDate {
  date: Date;
  events: MdcEvent[];
}
