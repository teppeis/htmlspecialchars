htmlspecialchars [![NPM version][npm-image]][npm-url] [![bower version][bower-image]][bower-url] [![build status][travis-image]][travis-url] [![Dependency Status][deps-image]][deps-url]
====

> Escape special characters to HTML entities in JavaScript

* Simple
* No dependencies
* Available in browsers, AMD (RequireJS) and CommonJS (Node.js).

## Usage

```javascript
console.log(htmlspecialchars("</script>'foo!"));
// &lt;/script&gt;&#039;foo!
```

See [test.js](https://github.com/teppeis/htmlspecialchars/blob/master/test/test.js) for detail spec.

## Install

### for Node.js

Just `npm install htmlspecialchars`.

### for Browsers

`bower install htmlspecialchars` and load `index.js` in your html:

```html
<script src="path/to/bower_components/htmlspecialchars/index.js"></script>
```

or load with [RequireJS](http://requirejs.org/).

## License

MIT License: Teppei Sato &lt;teppeis@gmail.com&gt;

[npm-image]: https://img.shields.io/npm/v/htmlspecialchars.svg
[npm-url]: https://npmjs.org/package/htmlspecialchars
[bower-image]: https://img.shields.io/bower/v/htmlspecialchars.svg
[bower-url]: https://github.com/teppeis/htmlspecialchars
[travis-image]: https://travis-ci.org/teppeis/htmlspecialchars.svg?branch=master
[travis-url]: https://travis-ci.org/teppeis/htmlspecialchars
[deps-image]: https://david-dm.org/teppeis/htmlspecialchars.svg
[deps-url]: https://david-dm.org/teppeis/htmlspecialchars
