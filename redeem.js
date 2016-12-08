!function(root) {
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
  
  var old = root.require
  root.require = require
  
  if (typeof module != 'undefined') { 
    module.exports = require
  }
}(this);