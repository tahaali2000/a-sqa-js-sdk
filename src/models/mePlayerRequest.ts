/**
 * Spotify Web API with fixes and improvements from sonalluxLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, boolean, object, optional, Schema, string } from '../schema';

export interface MePlayerRequest {
  /** A JSON array containing the ID of the device on which playback should be started/transferred.<br/>For example:`{device_ids:["74ASZWbe4lXaubB36ztrGX"]}`<br/>_**Note**: Although an array is accepted, only a single device_id is currently supported. Supplying more than one will return `400 Bad Request`_ */
  deviceIds: string[];
  /** **true**: ensure playback happens on new device.<br/>**false** or not provided: keep the current playback state. */
  play?: boolean;
}

export const mePlayerRequestSchema: Schema<MePlayerRequest> = object({
  deviceIds: ['device_ids', array(string())],
  play: ['play', optional(boolean())],
});
