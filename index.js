
module.exports = homebridge => {
  const ShellyPlatform = require('./platform')(homebridge)

  homebridge.registerPlatform(
    'homebridge-2-0-shelly',
    'Shelly',
    ShellyPlatform,
    true
  )
}
