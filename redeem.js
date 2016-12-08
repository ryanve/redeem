!function(root) {
  var old

  function redeem() {
    old = root.require
    root.require = require
  }

  function require(id) {
    var found

    try {
      found = old.apply(this, arguments)
    } catch (error) {
      found = root[id]
      if (null == found) throw error
    }

    return found
  }

  redeem.require = require
  typeof module != 'undefined' ? module.exports = redeem : root.redeem = redeem
  redeem()
}(this);
