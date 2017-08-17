/**
 * Created by almoral on 8/17/17.
 */
import * as tv4 from "tv4";

export class MDCEvent {

  public id: number;
  public eventTitle: string;
  public eventDate: string;
  public endDate: string;
  public isRecurring: boolean;
  public isAllDayEvent: boolean;
  public hasAttachments: boolean;

  public static schema = {
    "title": "MDCEvent",
    "description": "Schema to validate event retrieved from Sharepoint.",
    "type": "object",
    "required": ["id", "eventTitle", "eventDate", "endDate", "isRecurring", "isAllDayEvent", "hasAttachments"],
    "properties": {
      "id": {
        "description": "The unique identifier for an event",
        "type": "number",
        "minLength": 1
      },
      "eventTitle": {
        "description": "The title of an event.",
        "type": "string"
      },
      "eventDate": {
        "description": "The date of an event.",
        "type": "string"
      },
      "endDate": {
        "description": "The date an event ends.",
        "type": "string"
      },
      "isRecurring": {
        "description": "Whether this is a recurring event or not.",
        "type": "boolean"
      },
      "isAllDayEvent": {
        "description": "Whether this is an all day event or not.",
        "type": "boolean"
      },
      "hasAttachments": {
        "description": "Whether the event has any file attachments or not.",
        "type": "boolean"
      }
    }

  };


  constructor(id: number,
              eventTitle: string,
              eventDate: string,
              endDate: string,
              isRecurring: boolean,
              isAllDayEvent: boolean,
              hasAttachments: boolean
              ) {

    this.id = id || null;
    this.eventTitle = eventTitle || '';
    this.eventDate = eventDate || '';
    this.endDate = endDate || '';
    this.isRecurring = isRecurring || false;
    this.isAllDayEvent = isAllDayEvent || false;
    this.hasAttachments = hasAttachments || false;
  }


  /**
   * fromJson creates an instance of the MDCEvent object from
   * a json. If the json does not validate correctly, null is returned.
   * @param json - designed to be used with a json coming from a service.
   * @returns {any} if json validates returns an MDCEvent otherwise it returns null.
   */
  public static fromJSON(json: any): MDCEvent {
    // if (MDCEvent.validateJson(json))
      return new MDCEvent(json.id, json.Title, json.EventDate, json.EndDate, json.fRecurrence, json.fAllDayEvent, json.Attachments);
    // else {
    //   console.error("error: invalid json to build event", json);
    //   return null;
    // }


  }

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
  }

}
