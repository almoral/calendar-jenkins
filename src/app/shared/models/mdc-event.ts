import * as tv4 from 'tv4';
import * as tv4format from 'tv4-formats';


export class MdcEvent {
  public id: number;
  public odataId: string;
  public eventName: string;
  public startDate: Date;
  public endDate: Date;
  public geolocation: string;
  public isAllDayEvent: boolean;
  public isRecurringEvent: boolean;
  public hasAttachments: boolean;
  public categories: string [];
  public eventType: string;
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
  public eventUrl: object;


  public static schema2 = {
    'title': 'MDCEvent',
    'description': 'Schema to validate event retrieved from Sharepoint.',
    'type': 'object',
    'required': ['id', 'eventName', 'startDate', 'endDate', 'isAllDayEvent', 'isRecurringEvent', 'eventType', 'contactName', 'contactPhone', 'contactEmail', 'adaName', 'adaPhone', 'adaEmail'],
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
      'startDate': {
        'type': 'Date'
      },
      'endDate': {
        'type': 'Date'
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
      'adaName': {
        'type': 'string'
      },
      'adaPhone': {
        'type': 'string'
      },
      'adaEmail': {
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





  public static schema = {
    'title': 'MDCEvent',
    'description': 'Schema to validate event retrieved from Sharepoint.',
    'type': 'object',
    'required': ['id', 'eventName', 'eventType', 'startDate', 'endDate',
                 'contactName', 'contactPhone', 'contactEmail',
                 'adaName', 'adaPhone', 'adaEmail'],
    'properties': {
      'id': {
        'type': 'number'
      },
      'eventName': {
        'type': 'string'
      },
      'eventType': {
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
        'type': ['boolean', null]
      },
      'isAllDayEvent': {
        'type': ['boolean', null]
      },
      'shortDescription': {
        'type': ['string', null]
      },
      'longDescription': {
        'type': ['string', null]
      },
      'isClosedToMedia': {
        'type': ['boolean', null]
      },
      'isClosedToPublic': {
        'type': ['boolean', null]
      },
      'isFree': {
        'type': ['boolean', null]
      },
      'eventURL': {
        'type': 'object',
        'properties': {
          'description': {
            'type': ['string', null]
          },
          'url': {
            'type': ['string', null],
            'format': 'url'
          }
        }
      },
      'categories': {
        'type': ['array', null],
        'items':{
          'type':'string'
        }
      }
      //,
      // 'hasAttachments': {
      //   'type': 'boolean'
      //  },
      // 'odataId': {
      //   'type': 'string'
      // },
      // 'geolocation': {
      //   'type': 'string'
      // },
    }
  }



  constructor(id: number,
              odataId: string,
              eventName: string,
              startDate: Date,
              endDate: Date,
              geolocation: string,
              isRecurringEvent: boolean,
              isAllDayEvent: boolean,
              hasAttachments: boolean,
              categories: string [],
              eventType: string,
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
              eventURL: object
  ) {

    this.id = id || null;
    this.odataId = odataId || '';
    this.eventName = eventName || '';
    this.startDate = startDate || null;
    this.endDate = endDate || null;
    this.geolocation = geolocation || '';
    this.isRecurringEvent = isRecurringEvent || false;
    this.isAllDayEvent = isAllDayEvent || false;
    this.hasAttachments = hasAttachments || false;
    this.categories = categories || [];
    this.eventType = eventType || '';
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
    this.eventUrl = eventURL || {};
  }


  /**
   * fromJson creates an instance of the MdcEvent object from
   * a json. If the json does not validate correctly, an Error is thrown.
   * @param json - designed to be used with a json coming from a service.
   * @returns {any} if json validates returns an MdcEvent otherwise it throws an error.
   */
  public static fromJSON(json: any): MdcEvent {
    if (MdcEvent.validateJson(json))
      return new MdcEvent(
        json.id,
        json.odataId,
        json.eventName,
        new Date(json.startDate),
        new Date(json.endDate),
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
        json.adaName,
        json.adaPhone,
        json.adaEmail,
        json.isClosedToMedia,
        json.isClosedToPublic,
        json.isFree,
        json.eventURL
      );
    else {
      console.error('error: invalid json to build event', json);
      throw new Error('error: invalid json to build event');
    }


  };

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
