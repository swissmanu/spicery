import {expect} from 'chai';
import {ParserError} from '../../src/parsers';
import {aString} from '../../src/parsers/string';
import {anArrayContaining} from '../../src/parsers/array';

describe('Parser', () => {
  describe('anArrayContaining', () => {
    it('should return type array given an array', () => {
      expect(anArrayContaining(aString)([])).to.be.an('Array');
    });

    it('should return given array', () => {
      expect(anArrayContaining(aString)(['test'])).is.eql(['test']);
    });

    it('should use given item parser to parse items', () => {
      const itemParser = () => 42;
      expect(anArrayContaining(itemParser)(['1', 1, true])).is.eql([42, 42, 42]);
    });

    it('should throw a ParserError when given null', () => {
      expect(() => anArrayContaining(aString)(null)).to.throw(ParserError);
    });

    it('should throw a ParserError when given undefined', () => {
      expect(() => anArrayContaining(aString)(undefined)).to.throw(ParserError);
    });

    it('should throw a ParserError when given a number', () => {
      expect(() => anArrayContaining(aString)(1)).to.throw(ParserError);
    });

    it('should throw a ParserError when given a string', () => {
      expect(() => anArrayContaining(aString)('test')).to.throw(ParserError);
    });

    it('should throw a ParserError when given an object', () => {
      expect(() => anArrayContaining(aString)({})).to.throw(ParserError);
    });
  });
});
