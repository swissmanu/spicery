import {expect} from 'chai';
import {aString, strings} from '../../src/parsers/string';
import {ParserError} from '../../src/parsers';

describe('Parser', () => {
  describe('aString', () => {
    it('should return type string', () => {
      expect(aString('test')).to.be.a('string');
    });

    it('should return given string', () => {
      expect(aString('test')).is.eql('test');
    });

    it('should throw a ParserError when given null', () => {
      expect(() => aString(null)).to.throw(ParserError);
    });

    it('should throw a ParserError when given undefined', () => {
      expect(() => aString(undefined)).to.throw(ParserError);
    });

    it('should throw a ParserError when given a number', () => {
      expect(() => aString(1)).to.throw(ParserError);
    });

    it('should throw a ParserError when given a boolean', () => {
      expect(() => aString(true)).to.throw(ParserError);
    });

    it('should throw a ParserError when given an object', () => {
      expect(() => aString({})).to.throw(ParserError);
    });
  });

  describe('strings', () => {
    it('should be a synonym for aString', () => {
      expect(strings).to.be.equal(aString);
    });
  });
});
