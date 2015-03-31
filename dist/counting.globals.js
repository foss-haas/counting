(function(root){
var module = {exports: {}};
(function(require, exports, module) {
/*jshint es3: true */
/*globals module */
'use strict';
function counting(offset, increment, fn) {
  if (typeof offset === 'function') {
    increment = offset;
    offset = undefined;
  }
  if (typeof increment === 'function') {
    fn = increment;
    increment = undefined;
  }
  function wrapper() {
    /*jshint validthis: true */
    var args = Array.prototype.slice.call(arguments);
    args.unshift(wrapper.count);
    wrapper.count += wrapper.increment;
    return fn.apply(this, args);
  }
  wrapper.count = offset || 0;
  wrapper.increment = increment || 1;
  return wrapper;
}

module.exports = counting;
}(function(key){return root[key];}, module.exports, exports));
root.counting = module.exports;
}(this));