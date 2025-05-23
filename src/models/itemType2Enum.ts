/**
 * Spotify Web API with fixes and improvements from sonalluxLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ItemType2Enum
 */
export enum ItemType2Enum {
  Artist = 'artist',
  User = 'user',
}

/**
 * Schema for ItemType2Enum
 */
export const itemType2EnumSchema: Schema<ItemType2Enum> = stringEnum(
  ItemType2Enum
);
