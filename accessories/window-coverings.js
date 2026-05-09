
module.exports = homebridge => {
  const Categories = require('../util/categories')(homebridge)
  const WindowCoveringAbility =
    require('../abilities/window-covering')(homebridge)
  const { ShellyAccessory } = require('./base')(homebridge)

  class Shelly2WindowCoveringAccessory extends ShellyAccessory {
    constructor(device, index, config, log) {
      super('windowCovering', device, index, config, log)

      this.abilities.push(new WindowCoveringAbility(
        'rollerPosition',
        'rollerState',
        this.setPosition.bind(this)
      ))
    }

    get category() {
      return Categories.WINDOW_COVERING
    }

    /**
     * Sets the current position to the new value.
     * @returns {Promise} A Promise that resolves when the position has been
     * updated.
     */
    setPosition(newValue) {
      return this.device.setRollerPosition(newValue)
    }
  }

  return {
    Shelly2WindowCoveringAccessory,
  }
}
