
# Getting Started with Spotify Web API with fixes and improvements from sonallux

## Introduction

You can use Spotify's Web API to discover music and podcasts, manage your Spotify library, control audio playback, and much more. Browse our available Web API endpoints using the sidebar at left, or via the navigation bar on top of this page on smaller screens.

In order to make successful Web API requests your app will need a valid access token. One can be obtained through <a href="https://developer.spotify.com/documentation/general/guides/authorization-guide/">OAuth 2.0</a>.

The base URI for all Web API requests is `https://api.spotify.com/v1`.

Need help? See our <a href="https://developer.spotify.com/documentation/web-api/guides/">Web API guides</a> for more information, or visit the <a href="https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer">Spotify for Developers community forum</a> to ask questions and connect with other developers.

## Install the Package

Run the following command from your project directory to install the package from npm:

```bash
npm install a-sqa-sdk@4.5.7
```

For additional package details, see the [Npm page for the a-sqa-sdk@4.5.7 npm](https://www.npmjs.com/package/a-sqa-sdk/v/4.5.7).

## Test the SDK

To validate the functionality of this SDK, you can execute all tests located in the `test` directory. This SDK utilizes `Jest` as both the testing framework and test runner.

To run the tests, navigate to the root directory of the SDK and execute the following command:

```bash
npm run test
```

Or you can also run tests with coverage report:

```bash
npm run test:coverage
```

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/tahaali2000/a-sqa-js-sdk/tree/4.5.7/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| environment | `Environment` | The API environment. <br> **Default: `Environment.Production`** |
| timeout | `number` | Timeout for API calls.<br>*Default*: `0` |
| httpClientOptions | [`Partial<HttpClientOptions>`](https://www.github.com/tahaali2000/a-sqa-js-sdk/tree/4.5.7/doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |
| authorizationCodeAuthCredentials | [`AuthorizationCodeAuthCredentials`](https://www.github.com/tahaali2000/a-sqa-js-sdk/tree/4.5.7/doc/auth/oauth-2-authorization-code-grant.md) | The credential object for authorizationCodeAuth |

The API client can be initialized as follows:

```ts
const client = new Client({
  authorizationCodeAuthCredentials: {
    oAuthClientId: 'OAuthClientId',
    oAuthClientSecret: 'OAuthClientSecret',
    oAuthRedirectUri: 'OAuthRedirectUri',
    oAuthScopes: [
      OAuthScopeEnum.AppRemoteControl,
      OAuthScopeEnum.PlaylistReadPrivate
    ]
  },
  timeout: 0,
  environment: Environment.Production,
});
```

## Authorization

This API uses the following authentication schemes.

* [`oauth_2_0 (OAuth 2 Authorization Code Grant)`](https://www.github.com/tahaali2000/a-sqa-js-sdk/tree/4.5.7/doc/auth/oauth-2-authorization-code-grant.md)

## List of APIs

* [Albums](https://www.github.com/tahaali2000/a-sqa-js-sdk/tree/4.5.7/doc/controllers/albums.md)
* [Artists](https://www.github.com/tahaali2000/a-sqa-js-sdk/tree/4.5.7/doc/controllers/artists.md)
* [Audiobooks](https://www.github.com/tahaali2000/a-sqa-js-sdk/tree/4.5.7/doc/controllers/audiobooks.md)
* [Categories](https://www.github.com/tahaali2000/a-sqa-js-sdk/tree/4.5.7/doc/controllers/categories.md)
* [Chapters](https://www.github.com/tahaali2000/a-sqa-js-sdk/tree/4.5.7/doc/controllers/chapters.md)
* [Episodes](https://www.github.com/tahaali2000/a-sqa-js-sdk/tree/4.5.7/doc/controllers/episodes.md)
* [Genres](https://www.github.com/tahaali2000/a-sqa-js-sdk/tree/4.5.7/doc/controllers/genres.md)
* [Markets](https://www.github.com/tahaali2000/a-sqa-js-sdk/tree/4.5.7/doc/controllers/markets.md)
* [Player](https://www.github.com/tahaali2000/a-sqa-js-sdk/tree/4.5.7/doc/controllers/player.md)
* [Playlists](https://www.github.com/tahaali2000/a-sqa-js-sdk/tree/4.5.7/doc/controllers/playlists.md)
* [Search](https://www.github.com/tahaali2000/a-sqa-js-sdk/tree/4.5.7/doc/controllers/search.md)
* [Shows](https://www.github.com/tahaali2000/a-sqa-js-sdk/tree/4.5.7/doc/controllers/shows.md)
* [Tracks](https://www.github.com/tahaali2000/a-sqa-js-sdk/tree/4.5.7/doc/controllers/tracks.md)
* [Users](https://www.github.com/tahaali2000/a-sqa-js-sdk/tree/4.5.7/doc/controllers/users.md)

## SDK Infrastructure

### Configuration

* [HttpClientOptions](https://www.github.com/tahaali2000/a-sqa-js-sdk/tree/4.5.7/doc/http-client-options.md)
* [RetryConfiguration](https://www.github.com/tahaali2000/a-sqa-js-sdk/tree/4.5.7/doc/retry-configuration.md)

### HTTP

* [HttpRequest](https://www.github.com/tahaali2000/a-sqa-js-sdk/tree/4.5.7/doc/http-request.md)

### Utilities

* [ApiResponse](https://www.github.com/tahaali2000/a-sqa-js-sdk/tree/4.5.7/doc/api-response.md)
* [ApiError](https://www.github.com/tahaali2000/a-sqa-js-sdk/tree/4.5.7/doc/api-error.md)

