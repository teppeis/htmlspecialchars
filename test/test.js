'use strict';

var assert = require('power-assert');

describe('htmlspecialchars', function() {
    it('escapes "&" to "&amp;"', function() {
        assert(htmlspecialchars('&') === '&amp;');
    });
    it('escapes "<" to "&lt;"', function() {
        assert(htmlspecialchars('<') === '&lt;');
    });
    it('escapes ">" to "&gt;"', function() {
        assert(htmlspecialchars('>') === '&gt;');
    });
    it('escapes \'"\' to "&quot;"', function() {
        assert(htmlspecialchars('"') === '&quot;');
    });
    it('escapes "\'" to "&#039;"', function() {
        assert(htmlspecialchars("'") === '&#039;');
    });
    it('escapes all special chars', function() {
        assert(htmlspecialchars("<&<&") === '&lt;&amp;&lt;&amp;');
    });
    it('returns an empty string for null', function() {
        assert(htmlspecialchars(null) === '');
    });
    it('returns an empty string for undefined', function() {
        assert(htmlspecialchars(null) === '');
    });
    it('stringify non-string value', function() {
        assert(htmlspecialchars(1) === '1');
    });
    it('returns "false" for false', function() {
        assert(htmlspecialchars(false) === 'false');
    });
});
