# Changelog

## 0.20.0

* Forked as `homebridge2.0-shelly` / `homebridge-2-0-shelly`.
* Added Homebridge 2.0 compatibility for moved HAP APIs:
  * `Service.Battery`
  * `homebridge.hap.Formats`
  * `homebridge.hap.Perms`
  * `homebridge.hap.Categories`
* Kept the existing `Shelly` platform alias for drop-in compatibility with
  existing Homebridge configs.
* Registered the Homebridge plugin identifier as `homebridge-2-0-shelly` to
  match the npm package name.
* Added patch credit for 0xSkipper81 while preserving original project credits.
