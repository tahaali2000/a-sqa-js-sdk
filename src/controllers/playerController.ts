/**
 * Spotify Web API with fixes and improvements from sonalluxLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  CurrentlyPlayingContextObject,
  currentlyPlayingContextObjectSchema,
} from '../models/currentlyPlayingContextObject';
import {
  CurrentlyPlayingObject,
  currentlyPlayingObjectSchema,
} from '../models/currentlyPlayingObject';
import {
  CursorPagingPlayHistoryObject,
  cursorPagingPlayHistoryObjectSchema,
} from '../models/cursorPagingPlayHistoryObject';
import { ManyDevices, manyDevicesSchema } from '../models/manyDevices';
import {
  MePlayerPlayRequest,
  mePlayerPlayRequestSchema,
} from '../models/mePlayerPlayRequest';
import {
  MePlayerRequest,
  mePlayerRequestSchema,
} from '../models/mePlayerRequest';
import { QueueObject, queueObjectSchema } from '../models/queueObject';
import { bigint, boolean, number, optional, string } from '../schema';
import { BaseController } from './baseController';
import { ForbiddenError } from '../errors/forbiddenError';
import { TooManyRequestsError } from '../errors/tooManyRequestsError';
import { UnauthorizedError } from '../errors/unauthorizedError';

export class PlayerController extends BaseController {
  /**
   * Get information about the user’s current playback state, including track or episode, progress, and
   * active device.
   *
   *
   * @param market
   * @param additionalTypes
   * @return Response from the API call


   */
  async getInformationAboutTheUsersCurrentPlayback(
    market?: string,
    additionalTypes?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CurrentlyPlayingContextObject>> {
    const req = this.createRequest('GET', '/me/player');
    const mapped = req.prepareArgs({
      market: [market, optional(string())],
      additionalTypes: [additionalTypes, optional(string())],
    });
    req.query('market', mapped.market);
    req.query('additional_types', mapped.additionalTypes);
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.callAsJson(currentlyPlayingContextObjectSchema, requestOptions);
  }

  /**
   * Transfer playback to a new device and optionally begin playback. This API only works for users who
   * have Spotify Premium. The order of execution is not guaranteed when you use this API with other
   * Player API endpoints.
   *
   *
   * @param body
   * @return Response from the API call


   */
  async transferAUsersPlayback(
    body?: MePlayerRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PUT', '/me/player');
    const mapped = req.prepareArgs({
      body: [body, optional(mePlayerRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.call(requestOptions);
  }

  /**
   * Get information about a user’s available Spotify Connect devices. Some device models are not
   * supported and will not be listed in the API response.
   *
   *
   * @return Response from the API call


   */
  async getAUsersAvailableDevices(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ManyDevices>> {
    const req = this.createRequest('GET', '/me/player/devices');
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.callAsJson(manyDevicesSchema, requestOptions);
  }

  /**
   * Get the object currently being played on the user's Spotify account.
   *
   *
   * @param market
   * @param additionalTypes
   * @return Response from the API call


   */
  async getTheUsersCurrentlyPlayingTrack(
    market?: string,
    additionalTypes?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CurrentlyPlayingObject>> {
    const req = this.createRequest('GET', '/me/player/currently-playing');
    const mapped = req.prepareArgs({
      market: [market, optional(string())],
      additionalTypes: [additionalTypes, optional(string())],
    });
    req.query('market', mapped.market);
    req.query('additional_types', mapped.additionalTypes);
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.callAsJson(currentlyPlayingObjectSchema, requestOptions);
  }

  /**
   * Start a new context or resume current playback on the user's active device. This API only works for
   * users who have Spotify Premium. The order of execution is not guaranteed when you use this API with
   * other Player API endpoints.
   *
   *
   * @param deviceId
   * @param body
   * @return Response from the API call


   */
  async startAUsersPlayback(
    deviceId?: string,
    body?: MePlayerPlayRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PUT', '/me/player/play');
    const mapped = req.prepareArgs({
      deviceId: [deviceId, optional(string())],
      body: [body, optional(mePlayerPlayRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.query('device_id', mapped.deviceId);
    req.json(mapped.body);
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.call(requestOptions);
  }

  /**
   * Pause playback on the user's account. This API only works for users who have Spotify Premium. The
   * order of execution is not guaranteed when you use this API with other Player API endpoints.
   *
   *
   * @param deviceId
   * @return Response from the API call


   */
  async pauseAUsersPlayback(
    deviceId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PUT', '/me/player/pause');
    const mapped = req.prepareArgs({
      deviceId: [deviceId, optional(string())],
    });
    req.query('device_id', mapped.deviceId);
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.call(requestOptions);
  }

  /**
   * Skips to next track in the user’s queue. This API only works for users who have Spotify Premium. The
   * order of execution is not guaranteed when you use this API with other Player API endpoints.
   *
   *
   * @param deviceId
   * @return Response from the API call


   */
  async skipUsersPlaybackToNextTrack(
    deviceId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST', '/me/player/next');
    const mapped = req.prepareArgs({
      deviceId: [deviceId, optional(string())],
    });
    req.query('device_id', mapped.deviceId);
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.call(requestOptions);
  }

  /**
   * Skips to previous track in the user’s queue. This API only works for users who have Spotify Premium.
   * The order of execution is not guaranteed when you use this API with other Player API endpoints.
   *
   *
   * @param deviceId
   * @return Response from the API call


   */
  async skipUsersPlaybackToPreviousTrack(
    deviceId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST', '/me/player/previous');
    const mapped = req.prepareArgs({
      deviceId: [deviceId, optional(string())],
    });
    req.query('device_id', mapped.deviceId);
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.call(requestOptions);
  }

  /**
   * Seeks to the given position in the user’s currently playing track. This API only works for users who
   * have Spotify Premium. The order of execution is not guaranteed when you use this API with other
   * Player API endpoints.
   *
   *
   * @param positionMs
   * @param deviceId
   * @return Response from the API call


   */
  async seekToPositionInCurrentlyPlayingTrack(
    positionMs: number,
    deviceId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PUT', '/me/player/seek');
    const mapped = req.prepareArgs({
      positionMs: [positionMs, number()],
      deviceId: [deviceId, optional(string())],
    });
    req.query('position_ms', mapped.positionMs);
    req.query('device_id', mapped.deviceId);
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.call(requestOptions);
  }

  /**
   * Set the repeat mode for the user's playback. This API only works for users who have Spotify Premium.
   * The order of execution is not guaranteed when you use this API with other Player API endpoints.
   *
   *
   * @param state
   * @param deviceId
   * @return Response from the API call


   */
  async setRepeatModeOnUsersPlayback(
    state: string,
    deviceId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PUT', '/me/player/repeat');
    const mapped = req.prepareArgs({
      state: [state, string()],
      deviceId: [deviceId, optional(string())],
    });
    req.query('state', mapped.state);
    req.query('device_id', mapped.deviceId);
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.call(requestOptions);
  }

  /**
   * Set the volume for the user’s current playback device. This API only works for users who have
   * Spotify Premium. The order of execution is not guaranteed when you use this API with other Player
   * API endpoints.
   *
   *
   * @param volumePercent
   * @param deviceId
   * @return Response from the API call


   */
  async setVolumeForUsersPlayback(
    volumePercent: number,
    deviceId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PUT', '/me/player/volume');
    const mapped = req.prepareArgs({
      volumePercent: [volumePercent, number()],
      deviceId: [deviceId, optional(string())],
    });
    req.query('volume_percent', mapped.volumePercent);
    req.query('device_id', mapped.deviceId);
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.call(requestOptions);
  }

  /**
   * Toggle shuffle on or off for user’s playback. This API only works for users who have Spotify Premium.
   * The order of execution is not guaranteed when you use this API with other Player API endpoints.
   *
   *
   * @param state
   * @param deviceId
   * @return Response from the API call


   */
  async toggleShuffleForUsersPlayback(
    state: boolean,
    deviceId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PUT', '/me/player/shuffle');
    const mapped = req.prepareArgs({
      state: [state, boolean()],
      deviceId: [deviceId, optional(string())],
    });
    req.query('state', mapped.state);
    req.query('device_id', mapped.deviceId);
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.call(requestOptions);
  }

  /**
   * Get tracks from the current user's recently played tracks.
   * _**Note**: Currently doesn't support podcast episodes._
   *
   *
   * @param limit  Example: 20
   * @param after
   * @param before
   * @return Response from the API call


   */
  async getRecentlyPlayed(
    limit?: number,
    after?: bigint,
    before?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CursorPagingPlayHistoryObject>> {
    const req = this.createRequest('GET', '/me/player/recently-played');
    const mapped = req.prepareArgs({
      limit: [limit, optional(number())],
      after: [after, optional(bigint())],
      before: [before, optional(number())],
    });
    req.query('limit', mapped.limit);
    req.query('after', mapped.after);
    req.query('before', mapped.before);
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.callAsJson(cursorPagingPlayHistoryObjectSchema, requestOptions);
  }

  /**
   * Get the list of objects that make up the user's queue.
   *
   *
   * @return Response from the API call


   */
  async getQueue(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<QueueObject>> {
    const req = this.createRequest('GET', '/me/player/queue');
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.callAsJson(queueObjectSchema, requestOptions);
  }

  /**
   * Add an item to the end of the user's current playback queue. This API only works for users who have
   * Spotify Premium. The order of execution is not guaranteed when you use this API with other Player
   * API endpoints.
   *
   *
   * @param uri
   * @param deviceId
   * @return Response from the API call


   */
  async addToQueue(
    uri: string,
    deviceId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST', '/me/player/queue');
    const mapped = req.prepareArgs({
      uri: [uri, string()],
      deviceId: [deviceId, optional(string())],
    });
    req.query('uri', mapped.uri);
    req.query('device_id', mapped.deviceId);
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.call(requestOptions);
  }
}
