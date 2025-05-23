/**
 * Spotify Web API with fixes and improvements from sonalluxLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema } from '../schema';

export interface ExplicitContentSettingsObject {
  /** When `true`, indicates that explicit content should not be played. */
  filterEnabled?: boolean;
  /** When `true`, indicates that the explicit content setting is locked and can't be changed by the user. */
  filterLocked?: boolean;
}

export const explicitContentSettingsObjectSchema: Schema<ExplicitContentSettingsObject> = object(
  {
    filterEnabled: ['filter_enabled', optional(boolean())],
    filterLocked: ['filter_locked', optional(boolean())],
  }
);
