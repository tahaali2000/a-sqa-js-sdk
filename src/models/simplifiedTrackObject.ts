/**
 * Spotify Web API with fixes and improvements from sonalluxLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  ExternalUrlObject,
  externalUrlObjectSchema,
} from './externalUrlObject';
import {
  LinkedTrackObject,
  linkedTrackObjectSchema,
} from './linkedTrackObject';
import {
  SimplifiedArtistObject,
  simplifiedArtistObjectSchema,
} from './simplifiedArtistObject';
import {
  TrackRestrictionObject,
  trackRestrictionObjectSchema,
} from './trackRestrictionObject';

export interface SimplifiedTrackObject {
  /** The artists who performed the track. Each artist object includes a link in `href` to more detailed information about the artist. */
  artists?: SimplifiedArtistObject[];
  /** A list of the countries in which the track can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code. */
  availableMarkets?: string[];
  /** The disc number (usually `1` unless the album consists of more than one disc). */
  discNumber?: number;
  /** The track length in milliseconds. */
  durationMs?: number;
  /** Whether or not the track has explicit lyrics ( `true` = yes it does; `false` = no it does not OR unknown). */
  explicit?: boolean;
  /** External URLs for this track. */
  externalUrls?: ExternalUrlObject;
  /** A link to the Web API endpoint providing full details of the track. */
  href?: string;
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track. */
  id?: string;
  /** Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking/) is applied. If `true`, the track is playable in the given market. Otherwise `false`. */
  isPlayable?: boolean;
  /** Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking/) is applied and is only part of the response if the track linking, in fact, exists. The requested track has been replaced with a different track. The track in the `linked_from` object contains information about the originally requested track. */
  linkedFrom?: LinkedTrackObject;
  /** Included in the response when a content restriction is applied. */
  restrictions?: TrackRestrictionObject;
  /** The name of the track. */
  name?: string;
  /** A URL to a 30 second preview (MP3 format) of the track. */
  previewUrl?: string | null;
  /** The number of the track. If an album has several discs, the track number is the number on the specified disc. */
  trackNumber?: number;
  /** The object type: "track". */
  type?: string;
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track. */
  uri?: string;
  /** Whether or not the track is from a local file. */
  isLocal?: boolean;
}

export const simplifiedTrackObjectSchema: Schema<SimplifiedTrackObject> = object(
  {
    artists: [
      'artists',
      optional(array(lazy(() => simplifiedArtistObjectSchema))),
    ],
    availableMarkets: ['available_markets', optional(array(string()))],
    discNumber: ['disc_number', optional(number())],
    durationMs: ['duration_ms', optional(number())],
    explicit: ['explicit', optional(boolean())],
    externalUrls: [
      'external_urls',
      optional(lazy(() => externalUrlObjectSchema)),
    ],
    href: ['href', optional(string())],
    id: ['id', optional(string())],
    isPlayable: ['is_playable', optional(boolean())],
    linkedFrom: ['linked_from', optional(lazy(() => linkedTrackObjectSchema))],
    restrictions: [
      'restrictions',
      optional(lazy(() => trackRestrictionObjectSchema)),
    ],
    name: ['name', optional(string())],
    previewUrl: ['preview_url', optional(nullable(string()))],
    trackNumber: ['track_number', optional(number())],
    type: ['type', optional(string())],
    uri: ['uri', optional(string())],
    isLocal: ['is_local', optional(boolean())],
  }
);
