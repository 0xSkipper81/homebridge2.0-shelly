<a href="https://github.com/0xSkipper81/homebridge2.0-shelly"><img src="homebridge-shelly.png" height="120"></a>

# homebridge2.0-shelly
[![npm-version](https://badgen.net/npm/v/homebridge-2-0-shelly)](https://www.npmjs.com/package/homebridge-2-0-shelly)
[![npm-total-downloads](https://badgen.net/npm/dt/homebridge-2-0-shelly)](https://www.npmjs.com/package/homebridge-2-0-shelly)

Homebridge 2.0 compatibility fork of
[homebridge-shelly](https://github.com/alexryd/homebridge-shelly), a
[Homebridge](https://homebridge.io) plugin for [Shelly](https://shelly.cloud)
that enables HomeKit support for first generation Shelly devices.

The npm package name is `homebridge-2-0-shelly`. The repository/display name is
`homebridge2.0-shelly`.

This fork keeps the Homebridge platform alias as `Shelly`, so existing
`config.json` entries can continue to work when switching from the original
plugin. The internal Homebridge plugin identifier is `homebridge-2-0-shelly`,
matching the npm package name expected by Homebridge.

For the next generation, see [homebridge-shelly-ng](https://github.com/alexryd/homebridge-shelly-ng).

## Homebridge 2.0 compatibility
This fork updates deprecated Homebridge/HAP API usage that breaks on
Homebridge 2.0 while retaining fallback support for Homebridge 1.x:

* `Service.BatteryService` now falls back to `Service.Battery`.
* `Characteristic.Formats` and `Characteristic.Perms` now use
  `homebridge.hap.Formats` and `homebridge.hap.Perms`.
* Accessory categories now use `homebridge.hap.Categories`, with fallback
  support for the old `Accessory.Categories` location.

## Supported devices
* [Shelly 1](https://shelly.cloud/shelly1-open-source/)
* [Shelly 1L](https://shelly.cloud/products/shelly-1l-single-wire-smart-home-automation-relay/)
* [Shelly 1PM](https://shelly.cloud/shelly-1pm-wifi-smart-relay-home-automation/)
* Shelly 2 <sup>1</sup>
* [Shelly 2.5](https://shelly.cloud/shelly-25-wifi-smart-relay-roller-shutter-home-automation/) <sup>1</sup>
* [Shelly 3EM](https://shelly.cloud/shelly-3-phase-energy-meter-with-contactor-control-wifi-smart-home-automation/)
* [Shelly 4Pro](https://shelly.cloud/shelly-4-pro/)
* [Shelly Air](https://shelly.cloud/products/shelly-air-smart-home-air-purifier/)
* [Shelly Bulb](https://shelly.cloud/shelly-bulb/) <sup>2</sup>
* [Shelly Button 1](https://shelly.cloud/products/shelly-button-1-smart-home-automation-device/) <sup>3</sup>
* Shelly Dimmer
* [Shelly Dimmer 2](https://shelly.cloud/products/shelly-dimmer-2-smart-home-light-contoller/)
* Shelly Door/Window
* [Shelly Door/Window 2](https://shelly.cloud/products/shelly-door-window-2-smart-home-automation-sensor/) <sup>3</sup>
* [Shelly Duo](https://shelly.cloud/wifi-smart-home-automation-shelly-duo/)
* [Shelly EM](https://shelly.cloud/shelly-energy-meter-with-contactor-control-wifi-smart-home-automation/)
* [Shelly Flood](https://shelly.cloud/shelly-flood-and-temperature-sensor-wifi-smart-home-automation/)
* Shelly HD
* [Shelly H&T](https://shelly.cloud/shelly-humidity-and-temperature/)
* [Shelly i3](https://shelly.cloud/products/shelly-i3-smart-home-automation-device/)
* [Shelly Motion](https://shelly.cloud/shelly-motion-smart-home-automation-sensor/) <sup>4</sup>
* [Shelly Plug](https://shelly.cloud/shelly-plug/)
* [Shelly Plug S](https://shelly.cloud/shelly-plug-s/)
* [Shelly Plug US](https://shelly.cloud/products/shelly-plug-us-smart-home-automation-device/)
* [Shelly RGBW2](https://shelly.cloud/wifi-smart-shelly-rgbw-2/)
* [Shelly Sense](https://shelly.cloud/shelly-sense/)
* [Shelly Uni](https://shelly.cloud/products/shelly-uni-smart-home-automation-device/)
* [Shelly Vintage](https://shelly.cloud/wifi-smart-home-automation-shelly-vintage/)

Is your device not on the list? See the section about unsupported devices below.

### Notes
<sup>1</sup> To use Shelly 2 or Shelly 2.5 in roller shutter mode the device
must have been calibrated and be running firmware version 1.4.9 or later.

<sup>2</sup> Requires firmware version 1.5.1 or later.

<sup>3</sup> Requires firmware version 1.8.0 or later.

<sup>4</sup> Requires setting the `Internet & Security -> CoIoT -> Remote
address` option on the Shelly device to the IP address of your device running
homebridge.

## Installation
1. Install Homebridge by following
   [the instructions](https://github.com/homebridge/homebridge/wiki).
2. Install this plugin using Homebridge UI, or by running:
   ```sh
   npm install -g homebridge-2-0-shelly
   ```
   Until the package is published to npm, install directly from GitHub:
   ```sh
   npm install -g github:0xSkipper81/homebridge2.0-shelly
   ```
   On Synology DSM package installs, use Homebridge Shell and add
   `--no-bin-links` if npm cannot chmod the optional CLI binary.
3. Add the configuration to your homebridge config.json.

## Configuration
In most cases, simply adding this plugin to the homebridge config.json will be
enough:
```json
"platforms": [
  {
    "platform": "Shelly",
    "name": "Shelly"
  }
]
```
Your Shelly devices should then be automatically discovered, as long as they use the stock firmware (no Tasmota etc.) and are
on the same network and subnet as the device running homebridge. See [this wiki page](https://github.com/alexryd/homebridge-shelly/wiki/Shelly,-CoAP-and-multicast) if that doesn't work.

To see a list of all discovered devices, visit the administration page by going
to `http://<IP-ADDRESS>:8181/`, where IP-ADDRESS is the address of the
device that you are running homebridge on.

### Network interface
Sometimes setting the `"networkInterface"` option to the name of the network
interface or the local IP address of your device will help when your devices
aren't automatically discovered, or you see error messages like
`addMembership EADDRNOTAVAIL` or `addMembership EADDRINUSE`.

### Authentication
Set the `"username"` and `"password"` options if you have restricted the web
interface with a username and password. Note that this configuration applies
to all Shelly devices.

### Request timeout
The `"requestTimeout"` option can be used to configure the timeout for HTTP
requests to the Shelly devices. Specify in milliseconds. Default is 10 seconds.

### Stale timeout
Use the `"staleTimeout"` option to configure how long a device can be offline
before it is regarded as stale and unregistered from HomeKit. Specify in
milliseconds. Set to `0` or `false` to disable. Disabled by default.

### Administration interface
By default, this plugin will launch an HTTP server on port 8181 to serve an
administration interface. You can disable this by setting `"admin"."enabled"`
to `false`. You can also change the port number using `"admin"."port"`.

### Device specific configurations
Configurations for specific Shelly devices can be set using the `"devices"`
array. Each object in the array must contain an `"id"` property with the ID of
the Shelly device that you want to target. IDs are always made up of 6 or 12
hexadecimal characters and can be found in the Shelly Cloud app or the web
interface of a device, under *Settings -> Device info -> Device ID*.

#### General configurations
* `"exclude"` - set to `true` to exclude the device from Homebridge.
* `"username"` and `"password"` - set these if you have restricted the web
  interface of the device with a username and password. This will override the
  global `"username"` and `"password"` options.
* `"name"` - sets a custom name for the device.

#### Shelly switch configurations
*Applies to Shelly 1, 1PM, 2 and 2.5 in relay mode, 4Pro, EM, Plug and Plug S.*
* `"type"` - sets the type of accessory the device is identified as. Available
  types are `"contactSensor"`, `"motionSensor"`, `"occupancySensor"`,
  `"outlet"`, `"switch"` (default) and `"valve"`.

#### Shelly 2.5 configurations
* `"type"` - in roller mode, the device can be identified as either `"door"`,
  `"garageDoorOpener"`, `"window"` or `"windowCovering"` (default).

#### Shelly RGBW2 configurations
* `"colorMode"` - set to `"rgbw"` (default) to have HomeKit control all four
  channels of the device (R, G, B, and W), or to `"rgb"` to omit the W channel.

### Example configuration
```json
"platforms": [
  {
    "platform": "Shelly",
    "name": "Shelly",
    "username": "admin",
    "password": "pa$$word",
    "devices": [
      { "id": "74B5A3", "exclude": true },
      { "id": "A612F0", "username": "admin", "password": "pa$$word2" },
      { "id": "6A78BB", "colorMode": "rgb" },
      { "id": "AD2214", "name": "My Device" },
      { "id": "1D56AF", "type": "outlet" }
    ],
    "admin": {
      "enabled": true,
      "port": 8181
    }
  }
]
```

## Unsupported devices
If you have a Shelly device that is not yet supported by this plugin you can
help adding support for it by following these steps:

1. Run `$ homebridge-2-0-shelly describe <ip-address>` with the IP address of the
   Shelly device.
2. Create [a new issue](https://github.com/0xSkipper81/homebridge2.0-shelly/issues)
   and post the output from the previous command.

## Credits
Original plugin by [Alexander Rydén](https://github.com/alexryd), published as
[homebridge-shelly](https://github.com/alexryd/homebridge-shelly).

Homebridge 2.0 compatibility patch by [0xSkipper81](https://github.com/0xSkipper81).

This fork keeps the original MIT license and project credits.

## Original Donations
Alexander Rydén develops the original plugin in his spare time. If you like it
and you find it useful,
please consider donating a small amount by clicking the button below. That will
allow him to buy new Shelly devices so that he can add support for them.

<a href='https://ko-fi.com/S6S3ZKXP' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi1.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
