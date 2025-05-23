/**
 * Spotify Web API with fixes and improvements from sonalluxLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, number, object, optional, Schema, string } from '../schema';

export interface PlaylistsTracksRequest1 {
  uris?: string[];
  /** The position of the first item to be reordered. */
  rangeStart?: number;
  /** The position where the items should be inserted.<br/>To reorder the items to the end of the playlist, simply set _insert_before_ to the position after the last item.<br/>Examples:<br/>To reorder the first item to the last position in a playlist with 10 items, set _range_start_ to 0, and _insert_before_ to 10.<br/>To reorder the last item in a playlist with 10 items to the start of the playlist, set _range_start_ to 9, and _insert_before_ to 0. */
  insertBefore?: number;
  /** The amount of items to be reordered. Defaults to 1 if not set.<br/>The range of items to be reordered begins from the _range_start_ position, and includes the _range_length_ subsequent items.<br/>Example:<br/>To move the items at index 9-10 to the start of the playlist, _range_start_ is set to 9, and _range_length_ is set to 2. */
  rangeLength?: number;
  /** The playlist's snapshot ID against which you want to make the changes. */
  snapshotId?: string;
}

export const playlistsTracksRequest1Schema: Schema<PlaylistsTracksRequest1> = object(
  {
    uris: ['uris', optional(array(string()))],
    rangeStart: ['range_start', optional(number())],
    insertBefore: ['insert_before', optional(number())],
    rangeLength: ['range_length', optional(number())],
    snapshotId: ['snapshot_id', optional(string())],
  }
);
