import {expect} from 'chai';
import {ParserError} from '../../src/parsers';
import {pString} from '../../src/parsers/string';
import {pArray} from '../../src/parsers/array';

describe('Parser', () => {
  describe('pArray', () => {
    it('should return type array given an array', () => {
      expect(pArray(pString)([])).to.be.an('Array');
    });

    it('should return given array', () => {
      expect(pArray(pString)(['test'])).is.eql(['test']);
    });

    it('should use given item parser to parse items', () => {
      const itemParser = () => 42;
      expect(pArray(itemParser)(['1', 1, true])).is.eql([42, 42, 42]);
    });

    it('should throw a ParserError when given null', () => {
      expect(() => pArray(pString)(null)).to.throw(ParserError);
    });

    it('should throw a ParserError when given undefined', () => {
      expect(() => pArray(pString)(undefined)).to.throw(ParserError);
    });

    it('should throw a ParserError when given a number', () => {
      expect(() => pArray(pString)(1)).to.throw(ParserError);
    });

    it('should throw a ParserError when given a string', () => {
      expect(() => pArray(pString)('test')).to.throw(ParserError);
    });

    it('should throw a ParserError when given an object', () => {
      expect(() => pArray(pString)({})).to.throw(ParserError);
    });
  });
});
