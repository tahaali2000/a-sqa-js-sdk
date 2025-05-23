/**
 * Spotify Web API with fixes and improvements from sonalluxLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ItemTypeEnum
 */
export enum ItemTypeEnum {
  Album = 'album',
  Artist = 'artist',
  Playlist = 'playlist',
  Track = 'track',
  Show = 'show',
  Episode = 'episode',
  Audiobook = 'audiobook',
}

/**
 * Schema for ItemTypeEnum
 */
export const itemTypeEnumSchema: Schema<ItemTypeEnum> = stringEnum(
  ItemTypeEnum
);
