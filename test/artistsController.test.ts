/**
 * Spotify Web API with fixes and improvements from sonalluxLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ArtistsController } from '../src';
import { testClient } from './testClient';
import { expectHeadersToMatch, makeApiCall } from './testHelper';

describe('ArtistsController', () => {
  let controller : ArtistsController;

  beforeAll(() => {
    controller = new ArtistsController(testClient);
  });

  it('should Test get-an-artist', async () => {
    const id = '0TnOYISbd1XYRBk9myaseg';

    const response = await makeApiCall(
      () => controller.getAnArtist(id)
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });

  it('should Test get-multiple-artists', async () => {
    const ids = '2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6';

    const response = await makeApiCall(
      () => controller.getMultipleArtists(ids)
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });

  it('should Test get-an-artists-albums', async () => {
    const id = '0TnOYISbd1XYRBk9myaseg';

    const includeGroups = 'single,appears_on';

    const market = 'ES';

    const limit = 20;

    const offset = 0;

    const response = await makeApiCall(
      () => controller.getAnArtistsAlbums(
        id,
        includeGroups,
        market,
        limit,
        offset
      )
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });

  it('should Test get-an-artists-top-tracks', async () => {
    const id = '0TnOYISbd1XYRBk9myaseg';

    const market = 'ES';

    const response = await makeApiCall(
      () => controller.getAnArtistsTopTracks(id, market)
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });

  it('should Test get-an-artists-related-artists', async () => {
    const id = '0TnOYISbd1XYRBk9myaseg';

    const response = await makeApiCall(
      () => controller.getAnArtistsRelatedArtists(id)
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });
});
