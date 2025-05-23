/**
 * Spotify Web API with fixes and improvements from sonalluxLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface ExternalUrlObject {
  /** The [Spotify URL](/documentation/web-api/concepts/spotify-uris-ids) for the object. */
  spotify?: string;
}

export const externalUrlObjectSchema: Schema<ExternalUrlObject> = object({
  spotify: ['spotify', optional(string())],
});
