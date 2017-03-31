/**
 *
 * @module fun-flip
 */
;(function () {
  'use strict'

  /* imports */
  var funAssert = require('fun-assert')
  var guarded = require('guarded')
  var setProp = require('set-prop')

  var isFunction = funAssert.type('Function')

  /* exports */
  module.exports = guarded({
    inputs: [isFunction],
    f: flip,
    output: isFunction
  })

  /**
   *
   * @function module:fun-flip.flip
   *
   * @param {Function} f - to flip arguments on
   *
   * @return {Function} f with flipped arguments
   */
  function flip (f) {
    return setProp('length', f.length, setProp('name', f.name, function () {
      return f.apply(null, Array.prototype.slice.call(arguments).reverse())
    }))
  }
})()

