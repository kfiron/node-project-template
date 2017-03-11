'use strict';
const expect = require('chai').expect,
  hello = require('..');

describe('hello', () => {

  it('hello world', () => {
    expect(hello.hello()).to.equal('world');
  });

});
