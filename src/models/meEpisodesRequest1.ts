/**
 * Spotify Web API with fixes and improvements from sonalluxLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

export interface MeEpisodesRequest1 {
  /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._ */
  ids?: string[];
}

export const meEpisodesRequest1Schema: Schema<MeEpisodesRequest1> = object({
  ids: ['ids', optional(array(string()))],
});
