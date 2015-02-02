/*jshint node: true */
/*globals describe, it */
'use strict';
var counting = require('../');
var expect = require('expect.js');

describe('counting', function () {
  it('is a function', function () {
    expect(counting).to.be.a('function');
  });
  it('returns a function', function () {
    expect(counting()).to.be.a('function');
  });
  describe('wrapper function', function () {
    it('calls the wrapped function', function () {
      var called = false;
      var wrapper = counting(function () {
        called = true;
      });
      expect(called).to.be(false);
      wrapper();
      expect(called).to.be(true);
    });
    it('returns the wrapped function\'s return value', function () {
      var result = 'foo';
      var wrapper = counting(function () {
        return result;
      });
      expect(wrapper()).to.equal(result);
    });
    it('passes the current count to the wrapped function', function () {
      var wrapper = counting(function (count) {
        return count;
      });
      expect(wrapper()).to.equal(0);
      expect(wrapper()).to.equal(1);
      expect(wrapper()).to.equal(2);
    });
    it('offsets the count by the given offset', function () {
      var wrapper = counting(20, function (count) {
        return count;
      });
      expect(wrapper()).to.equal(20);
      expect(wrapper()).to.equal(21);
      expect(wrapper()).to.equal(22);
    });
    it('increments the count with the given increment', function () {
      var wrapper = counting(0, -1, function (count) {
        return count;
      });
      expect(wrapper()).to.equal(0);
      expect(wrapper()).to.equal(-1);
      expect(wrapper()).to.equal(-2);
    });
    it('exposes the current count as an attribute', function () {
      var wrapper = counting(function (count) {
        return count;
      });
      expect(wrapper.count).to.equal(0);
      wrapper();
      expect(wrapper.count).to.equal(1);
      wrapper();
      expect(wrapper.count).to.equal(2);
    });
    it('passes any arguments as additional arguments to the wrapped function', function (done) {
      var a0 = 'hello';
      var b0 = 'world';
      var c0 = 'foobar';
      var wrapper = counting(function (count, a, b, c) {
        expect(a).to.equal(a0);
        expect(b).to.equal(b0);
        expect(c).to.equal(c0);
        done();
      });
      wrapper(a0, b0, c0);
    });
  });
});
