
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| environment | `Environment` | The API environment. <br> **Default: `Environment.Production`** |
| timeout | `number` | Timeout for API calls.<br>*Default*: `0` |
| httpClientOptions | [`Partial<HttpClientOptions>`](../doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |
| authorizationCodeAuthCredentials | [`AuthorizationCodeAuthCredentials`](auth/oauth-2-authorization-code-grant.md) | The credential object for authorizationCodeAuth |

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

## Spotify Web API with fixes and improvements from sonallux Client

The gateway for the SDK. This class acts as a factory for the Controllers and also holds the configuration of the SDK.

## Controllers

| Name | Description |
|  --- | --- |
| albums | Gets AlbumsController |
| artists | Gets ArtistsController |
| audiobooks | Gets AudiobooksController |
| categories | Gets CategoriesController |
| chapters | Gets ChaptersController |
| episodes | Gets EpisodesController |
| genres | Gets GenresController |
| markets | Gets MarketsController |
| player | Gets PlayerController |
| playlists | Gets PlaylistsController |
| search | Gets SearchController |
| shows | Gets ShowsController |
| tracks | Gets TracksController |
| users | Gets UsersController |
| oAuthAuthorization | Gets OAuthAuthorizationController |

