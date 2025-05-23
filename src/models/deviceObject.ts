/**
 * Spotify Web API with fixes and improvements from sonalluxLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

export interface DeviceObject {
  /** The device ID. This ID is unique and persistent to some extent. However, this is not guaranteed and any cached `device_id` should periodically be cleared out and refetched as necessary. */
  id?: string | null;
  /** If this device is the currently active device. */
  isActive?: boolean;
  /** If this device is currently in a private session. */
  isPrivateSession?: boolean;
  /** Whether controlling this device is restricted. At present if this is "true" then no Web API commands will be accepted by this device. */
  isRestricted?: boolean;
  /** A human-readable name for the device. Some devices have a name that the user can configure (e.g. \"Loudest speaker\") and some devices have a generic name associated with the manufacturer or device model. */
  name?: string;
  /** Device type, such as "computer", "smartphone" or "speaker". */
  type?: string;
  /** The current volume in percent. */
  volumePercent?: number | null;
  /** If this device can be used to set the volume. */
  supportsVolume?: boolean;
}

export const deviceObjectSchema: Schema<DeviceObject> = object({
  id: ['id', optional(nullable(string()))],
  isActive: ['is_active', optional(boolean())],
  isPrivateSession: ['is_private_session', optional(boolean())],
  isRestricted: ['is_restricted', optional(boolean())],
  name: ['name', optional(string())],
  type: ['type', optional(string())],
  volumePercent: ['volume_percent', optional(nullable(number()))],
  supportsVolume: ['supports_volume', optional(boolean())],
});
