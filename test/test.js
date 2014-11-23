'use strict';

var assert = require('power-assert');
var sut = require('../');

describe('htmlspecialchars', function() {
    it('escapes "&" to "&amp;"', function() {
        assert(sut('&') === '&amp;');
    });
    it('escapes "<" to "&lt;"', function() {
        assert(sut('<') === '&lt;');
    });
    it('escapes ">" to "&gt;"', function() {
        assert(sut('>') === '&gt;');
    });
    it('escapes \'"\' to "&quot;"', function() {
        assert(sut('"') === '&quot;');
    });
    it('escapes "\'" to "&#039;"', function() {
        assert(sut("'") === '&#039;');
    });
    it('escapes all special chars', function() {
        assert(sut("<&<&") === '&lt;&amp;&lt;&amp;');
    });
    it('returns an empty string for null', function() {
        assert(sut(null) === '');
    });
    it('returns an empty string for undefined', function() {
        assert(sut(null) === '');
    });
    it('stringify non-string value', function() {
        assert(sut(1) === '1');
    });
});
