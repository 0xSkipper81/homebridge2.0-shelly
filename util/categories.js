module.exports = homebridge => {
  if (homebridge.hap.Categories) {
    return homebridge.hap.Categories
  }

  if (homebridge.hap.Accessory && homebridge.hap.Accessory.Categories) {
    return homebridge.hap.Accessory.Categories
  }

  return {
    OTHER: 1,
    GARAGE_DOOR_OPENER: 4,
    LIGHTBULB: 5,
    OUTLET: 7,
    SWITCH: 8,
    SENSOR: 10,
    DOOR: 12,
    WINDOW: 13,
    WINDOW_COVERING: 14,
    FAUCET: 29,
  }
}
