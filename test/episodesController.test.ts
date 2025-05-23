/**
 * Spotify Web API with fixes and improvements from sonalluxLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { EpisodesController } from '../src';
import { testClient } from './testClient';
import { expectHeadersToMatch, makeApiCall } from './testHelper';

describe('EpisodesController', () => {
  let controller : EpisodesController;

  beforeAll(() => {
    controller = new EpisodesController(testClient);
  });

  it('should Test get-an-episode', async () => {
    const id = '512ojhOuo1ktJprKbVcKyQ';

    const market = 'ES';

    const response = await makeApiCall(
      () => controller.getAnEpisode(id, market)
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });

  it('should Test get-multiple-episodes', async () => {
    const ids = '77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf';

    const market = 'ES';

    const response = await makeApiCall(
      () => controller.getMultipleEpisodes(ids, market)
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });

  it('should Test get-users-saved-episodes', async () => {
    const market = 'ES';

    const limit = 20;

    const offset = 0;

    const response = await makeApiCall(
      () => controller.getUsersSavedEpisodes(market, limit, offset)
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });

  it('should Test save-episodes-user', async () => {
    const ids = '77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf';

    const response = await makeApiCall(
      () => controller.saveEpisodesUser(ids, undefined)
    );

    expect(response.statusCode).toBe(200);
  });

  it('should Test remove-episodes-user', async () => {
    const ids = '7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B';

    const response = await makeApiCall(
      () => controller.removeEpisodesUser(ids, undefined)
    );

    expect(response.statusCode).toBe(200);
  });

  it('should Test check-users-saved-episodes', async () => {
    const ids = '77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf';

    const response = await makeApiCall(
      () => controller.checkUsersSavedEpisodes(ids)
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);

    const expected: boolean[] = [
      false,
      true
    ];

    expect(response.result).not.toBeNull();
    expect(response.result).toEqual(expected);
  });
});
