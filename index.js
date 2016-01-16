function kuree(fn, n) {
  var slice = Array.prototype.slice;
  var args = slice.call(arguments);

  if (typeof n === "undefined") {
    args[1] = fn.length;
  }

  if (args.length - 2 === n) {
    return fn.apply(this, args.slice(2));
  } else {
    return function() {
      return kuree.apply(this, args.concat(
        slice.call(arguments)
      ));
    }
  }
}
module.exports = kuree;