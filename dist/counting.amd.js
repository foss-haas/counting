define(function(require, exports, module) {
/*jshint es3: true */
/*globals module */
'use strict';
function counting(offset, fn) {
  if (typeof offset === 'function') {
    fn = offset;
    offset = undefined;
  }
  function wrapper() {
    /*jshint validthis: true */
    var args = Array.prototype.slice.call(arguments);
    args.unshift(wrapper.count);
    wrapper.count += 1;
    return fn.apply(this, args);
  }
  wrapper.count = offset || 0;
  return wrapper;
}

module.exports = counting;
});