
# Simplified Album Object

## Structure

`SimplifiedAlbumObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `albumType` | [`AlbumTypeEnum`](../../doc/models/album-type-enum.md) | Required | The type of the album. |
| `totalTracks` | `number` | Required | The number of tracks in the album. |
| `availableMarkets` | `string[]` | Required | The markets in which the album is available: [ISO 3166-1 alpha-2 country codes](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _**NOTE**: an album is considered available in a market when at least 1 of its tracks is available in that market._ |
| `externalUrls` | [`ExternalUrlObject`](../../doc/models/external-url-object.md) | Required | Known external URLs for this album. |
| `href` | `string` | Required | A link to the Web API endpoint providing full details of the album. |
| `id` | `string` | Required | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the album. |
| `images` | [`ImageObject[]`](../../doc/models/image-object.md) | Required | The cover art for the album in various sizes, widest first. |
| `name` | `string` | Required | The name of the album. In case of an album takedown, the value may be an empty string. |
| `releaseDate` | `string` | Required | The date the album was first released. |
| `releaseDatePrecision` | [`ReleaseDatePrecisionEnum`](../../doc/models/release-date-precision-enum.md) | Required | The precision with which `release_date` value is known. |
| `restrictions` | [`AlbumRestrictionObject \| undefined`](../../doc/models/album-restriction-object.md) | Optional | Included in the response when a content restriction is applied. |
| `type` | `string` | Required, Constant | The object type.<br><br>**Value**: `'album'` |
| `uri` | `string` | Required | The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the album. |
| `artists` | [`SimplifiedArtistObject[]`](../../doc/models/simplified-artist-object.md) | Required | The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist. |

## Example (as JSON)

```json
{
  "album_type": "compilation",
  "total_tracks": 9,
  "available_markets": [
    "CA",
    "BR",
    "IT"
  ],
  "external_urls": {
    "spotify": "spotify6"
  },
  "href": "href2",
  "id": "2up3OPMp9Tb4dAKM2erWXQ",
  "images": [
    {
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "height": 300,
      "width": 300
    }
  ],
  "name": "name0",
  "release_date": "1981-12",
  "release_date_precision": "year",
  "type": "album",
  "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
  "artists": [
    {
      "external_urls": {
        "spotify": "spotify6"
      },
      "href": "href2",
      "id": "id0",
      "name": "name0",
      "type": "artist"
    }
  ],
  "restrictions": {
    "reason": "explicit"
  }
}
```

