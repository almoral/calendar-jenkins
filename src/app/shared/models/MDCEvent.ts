/**
 * Created by almoral on 8/17/17.
 */
import * as tv4 from 'tv4';

export class MDCEvent {
  public id: number;
  public odataId: string;
  public eventName: string;
  public eventDate: string;
  public endDate: string;
  public startTime: string;
  public endTime: string;
  public geolocation: string;
  public isAllDayEvent: boolean;
  public isRecurringEvent: boolean;
  public hasAttachments: boolean;
  public categories: string;
  public eventType: string;
  public shortDescription: string;
  public longDescription: string;
  public contactName: string;
  public contactPhone: string;
  public contactEmail: string;
  public ADAName: string;
  public ADAPhone: string;
  public ADAEmail: string;
  public isClosedToMedia: boolean;
  public isClosedToPublic: boolean;
  public isFree: boolean;
  public eventUrl: object;


  public static schema = {
    'title': 'MDCEvent',
    'description': 'Schema to validate event retrieved from Sharepoint.',
    'type': 'object',
    'required': ['id', 'eventName', 'eventDate', 'endDate', 'startTime', 'endTime', 'isAllDayEvent', 'isRecurringEvent', 'eventType', 'contactName', 'contactPhone', 'contactEmail', 'ADAName', 'ADAPhone', 'ADAEmail'],
    'properties': {
      'id': {
        'type': 'number'
      },
      'odataId': {
        'type': 'string'
      },
      'eventName': {
        'type': 'string'
      },
      'eventDate': {
        'type': 'string'
      },
      'endDate': {
        'type': 'string'
      },
      'startTime': {
        'type': 'string'
      },
      'endTime': {
        'type': 'string'
      },
      'geolocation': {
        'type': 'string'
      },
      'isAllDayEvent': {
        'type': 'boolean'
      },
      'isRecurringEvent': {
        'type': 'boolean'
      },
      'categories': {
        'type': 'array'
      },
      'items': {
        'type': 'Object'
      },
      'eventType': {
        'type': 'string'
      },
      'shortDescription': {
        'type': 'string'
      },
      'longDescription': {
        'type': 'string'
      },
      'contactName': {
        'type': 'string'
      },
      'contactPhone': {
        'type': 'string'
      },
      'contactEmail': {
        'type': 'string'
      },
      'ADAName': {
        'type': 'string'
      },
      'ADAPhone': {
        'type': 'string'
      },
      'ADAEmail': {
        'type': 'string'
      },
      'isClosedToMedia': {
        'type': 'boolean'
      },
      'isClosedToPublic': {
        'type': 'boolean'
      },
      'isFree': {
        'type': 'boolean'
      },
      'eventURL': {
        'type': 'object',
        'properties': {
          'description': {
            'type': 'string'
          },
          'url': {
            'type': 'string'
          }
        },
        'hasAttachments': {
          'type': 'boolean'
        }
      }
    }
  }


  constructor(id: number,
              odataId: string,
              eventName: string,
              eventDate: string,
              endDate: string,
              startTime: string,
              endTime: string,
              geolocation: string,
              isRecurringEvent: boolean,
              isAllDayEvent: boolean,
              categories: string,
              eventType: string,
              shortDescription: string,
              longDescription: string,
              contactName: string,
              contactPhone: string,
              contactEmail: string,
              ADAName: string,
              ADAPhone: string,
              ADAEmail: string,
              isClosedToMedia: boolean,
              isClosedToPublic: boolean,
              isFree: boolean,
              eventURL: object,
              hasAttachments: boolean
              ) {

    this.id = id || null;
    this.odataId = odataId || '';
    this.eventName = eventName || '';
    this.eventDate = eventDate || '';
    this.endDate = endDate || '';
    this.startTime = startTime || '';
    this.endTime = endTime || '';
    this.geolocation = geolocation || '';
    this.isRecurringEvent = isRecurringEvent || false;
    this.isAllDayEvent = isAllDayEvent || false;
    this.hasAttachments = hasAttachments || false;
    this.categories = categories || '';
    this.eventType = eventType || '';
    this.shortDescription = shortDescription || '';
    this.longDescription = longDescription || '';
    this.contactName = contactName || '';
    this.contactPhone = contactPhone || '';
    this.contactEmail = contactEmail || '';
    this.ADAName = ADAName || '';
    this.ADAPhone = ADAPhone || '';
    this.ADAEmail = ADAEmail || '';
    this.isClosedToMedia = isClosedToMedia || false;
    this.isClosedToPublic = isClosedToPublic || false;
    this.isFree = isFree || true;
    this.eventUrl = eventURL || {};
  }


  /**
   * fromJson creates an instance of the MDCEvent object from
   * a json. If the json does not validate correctly, null is returned.
   * @param json - designed to be used with a json coming from a service.
   * @returns {any} if json validates returns an MDCEvent otherwise it returns null.
   */
  public static fromJSON(json: any): MDCEvent {
    // if (MDCEvent.validateJson(json))
      return new MDCEvent(
        json.id,
        json.odataId,
        json.eventName,
        json.eventDate,
        json.endDate,
        json.startTime,
        json.endTime,
        json.geolocation,
        json.isAllDayEvent,
        json.isRecurringEvent,
        json.hasAttachments,
        json.categories,
        json.eventType,
        json.shortDescription,
        json.longDescription,
        json.contactName,
        json.contactPhone,
        json.contactEmail,
        json.ADAName,
        json.ADAPhone,
        json.ADAEmail,
        json.isClosedToMedia,
        json.isClosedToPublic,
        json.isFree,
        json.eventURL
      );
    // else {
    //   console.error('error: invalid json to build event', json);
    //   return null;
    // }


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
    return tv4.validate(json, MDCEvent.schema);
  };

};
