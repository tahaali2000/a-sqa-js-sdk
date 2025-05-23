/**
 * Spotify Web API with fixes and improvements from sonalluxLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { ErrorObject } from '../models/errorObject';

/**
 * Creates an instance of Unauthorized
 */
interface Unauthorized {
  error: ErrorObject;
}

export class UnauthorizedError extends ApiError<Unauthorized> {}
