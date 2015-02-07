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

`npm install htmlspecialchars` and
```javascript
var htmlspecialchars = require('htmlspecialchars');
console.log(htmlspecialchars("</script>'foo!"));
```

### for Browsers

If you want to use the latest version simply, specify gh-pages URL directly in your script tag:

```html
<script src="//teppeis.github.io/htmlspecialchars/index.js"></script>
<script>
console.log(htmlspecialchars("<\/script>'foo!"));
</script>
```

or `bower install htmlspecialchars` and specify the local `index.js`:

```html
<script src="path/to/bower_components/htmlspecialchars/index.js"></script>
```

or load it with [RequireJS](http://requirejs.org/).

## Testing

This library is tested with [BrowserStack](http://www.browserstack.com/) Open Source Free license. Thanks!

* IE 8, IE 11
* Chrome
* Firefox
* Safari 8
* iOS 7 Safari
* Android 4.4 Browser

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
