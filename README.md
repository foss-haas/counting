# Synopsis

**counting** is a decorator function that maintains a count of how many times the wrapped function was invoked and passes it to the function on every call.

[![license - MIT](https://img.shields.io/npm/l/counting.svg)](http://pluma.mit-license.org) [![Dependencies](https://img.shields.io/david/pluma/counting.svg)](https://david-dm.org/pluma/counting)

[![NPM status](https://nodei.co/npm/counting.png?compact=true)](https://npmjs.org/package/counting)

[![Build Status](https://img.shields.io/travis/pluma/counting.svg)](https://travis-ci.org/pluma/counting) [![Coverage Status](https://img.shields.io/coveralls/pluma/counting.svg)](https://coveralls.io/r/pluma/counting?branch=master)

# Install

## Node.js

### With NPM

```sh
npm install counting
```

### From source

```sh
git clone https://github.com/pluma/counting.git
cd counting
npm install
npm run test && npm run dist
```

## Browser

### With component

```sh
component install pluma/counting
```

[Learn more about component](https://github.com/component/component).

### With bower

```sh
bower install counting
```

[Learn more about bower](https://github.com/twitter/bower).

### With a CommonJS module loader

Download the [latest minified CommonJS release](https://raw.github.com/pluma/counting/master/dist/counting.min.js) and add it to your project.

[Learn more about CommonJS modules](http://wiki.commonjs.org/wiki/Modules/1.1).

### With an AMD module loader

Download the [latest minified AMD release](https://raw.github.com/pluma/counting/master/dist/counting.amd.min.js) and add it to your project.

[Learn more about AMD modules](http://requirejs.org/docs/whyamd.html).

### As a standalone library

Download the [latest minified standalone release](https://raw.github.com/pluma/counting/master/dist/counting.globals.min.js) and add it to your project.

```html
<script src="/your/js/path/counting.globals.min.js"></script>
```

This makes the `counting` module available in the global namespace.

# Example

```js
var counting = require('counting');

var countingLogger = counting(function (i, str) {
    console.log(i, str);
});

var countingDown = counting(10, -1, function (i, str) {
    console.log(i, str);
});

countingLogger('Hello World');
// 0 Hello World
countingLogger('Lorem ipsum');
// 1 Lorem ipsum
countingLogger.count += 1;
countingLogger('Dolor sit amet');
// 3 Dolor sit amet

countingDown('...');
// 10 ...
countingDown('...');
// 9 ...
countingDown.count = 2;
countingDown('...');
// 2 ...
countingDown('...');
// 1 ...
countingDown('Lift off!');
// 0 Lift off!
```

# API

## counting([offset, [increment,]] fn):Function

Creates a wrapper for the given function initialised to `offset` or `0` if no offset is provided.

## wrapper(...args)

Passes the current count and the given arguments to the wrapped function and returns the function's return value.

Increments the count by the `increment` or `1` if no increment was provided, each time it is called.

## wrapper.count:int

The current count of the wrapper.

## wrapper.increment:int

The increment of the wrapper.

# License

The MIT/Expat license. For more information, see http://pluma.mit-license.org/ or the accompanying [LICENSE](https://github.com/pluma/counting/blob/master/LICENSE) file.
