/**
 * Spotify Web API with fixes and improvements from sonalluxLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import { ArtistObject, artistObjectSchema } from './artistObject';

export interface ManyArtists {
  artists: ArtistObject[];
}

export const manyArtistsSchema: Schema<ManyArtists> = object({
  artists: ['artists', array(lazy(() => artistObjectSchema))],
});
