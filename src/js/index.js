import { version } from '../../package.json'
import { isBrowser } from './browser'
import Defaults from './defaults'
import createTippy from './createTippy'
import bindGlobalEventListeners from './bindGlobalEventListeners'
import { polyfillElementPrototypeProperties } from './reference'
import { validateOptions } from './props'
import { arrayFrom } from './ponyfills'
import { hideAllPoppers } from './popper'
import { isSingular, isPlainObject, getArrayOfElements } from './utils'

let globalEventListenersBound = false

/**
 * Exported module
 * @param {String|Element|Element[]|NodeList|Object} targets
 * @param {Object} options
 * @return {Object}
 */
function tippy(targets, options) {
  validateOptions(options, Defaults)

  if (!globalEventListenersBound) {
    bindGlobalEventListeners()
    globalEventListenersBound = true
  }

  const props = { ...Defaults, ...options }

  /**
   * If they are specifying a virtual positioning reference, we need to polyfill
   * some native DOM props
   */
  if (isPlainObject(targets)) {
    polyfillElementPrototypeProperties(targets)
  }

  const instances = getArrayOfElements(targets).reduce((acc, reference) => {
    const tip = reference && createTippy(reference, props)
    if (tip) {
      acc.push(tip)
    }
    return acc
  }, [])

  return isSingular(targets) ? instances[0] : instances
}

/**
 * Static props
 */
tippy.version = version
tippy.defaults = Defaults

/**
 * Static methods
 */
tippy.setDefaults = partialDefaults => {
  Object.keys(partialDefaults).forEach(key => {
    Defaults[key] = partialDefaults[key]
  })
}
tippy.hideAllPoppers = hideAllPoppers

/**
 * Auto-init tooltips for elements with a `data-tippy="..."` attribute
 */
export const autoInit = () => {
  arrayFrom(document.querySelectorAll('[data-tippy]')).forEach(el => {
    const content = el.getAttribute('data-tippy')
    if (content) {
      tippy(el, { content })
    }
  })
}
if (isBrowser) {
  setTimeout(autoInit)
}

export default tippy
