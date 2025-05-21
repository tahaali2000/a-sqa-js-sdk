
# Device Object

## Structure

`DeviceObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | The device ID. This ID is unique and persistent to some extent. However, this is not guaranteed and any cached `device_id` should periodically be cleared out and refetched as necessary. |
| `isActive` | `boolean \| undefined` | Optional | If this device is the currently active device. |
| `isPrivateSession` | `boolean \| undefined` | Optional | If this device is currently in a private session. |
| `isRestricted` | `boolean \| undefined` | Optional | Whether controlling this device is restricted. At present if this is "true" then no Web API commands will be accepted by this device. |
| `name` | `string \| undefined` | Optional | A human-readable name for the device. Some devices have a name that the user can configure (e.g. \"Loudest speaker\") and some devices have a generic name associated with the manufacturer or device model. |
| `type` | `string \| undefined` | Optional | Device type, such as "computer", "smartphone" or "speaker". |
| `volumePercent` | `number \| null \| undefined` | Optional | The current volume in percent.<br><br>**Constraints**: `>= 0`, `<= 100` |
| `supportsVolume` | `boolean \| undefined` | Optional | If this device can be used to set the volume. |

## Example (as JSON)

```json
{
  "name": "Kitchen speaker",
  "type": "computer",
  "volume_percent": 59,
  "id": "id4",
  "is_active": false,
  "is_private_session": false,
  "is_restricted": false
}
```

