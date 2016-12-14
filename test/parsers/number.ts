import {expect} from 'chai';
import {aNumber} from '../../src/parsers/number';
import {ParserError} from '../../src/parsers';

describe('Parser', () => {
  describe('aNumber', () => {
    it('should return type number given a number', () => {
      expect(aNumber(1)).to.be.a('number');
    });

    it('should return given number', () => {
      expect(aNumber(42)).is.eql(42);
    });

    it('should throw a ParserError when given null', () => {
      expect(() => aNumber(null)).to.throw(ParserError);
    });

    it('should throw a ParserError when given undefined', () => {
      expect(() => aNumber(undefined)).to.throw(ParserError);
    });

    it('should throw a ParserError when given a boolean', () => {
      expect(() => aNumber(false)).to.throw(ParserError);
    });

    it('should throw a ParserError when given a string', () => {
      expect(() => aNumber('test')).to.throw(ParserError);
    });

    it('should throw a ParserError when given an object', () => {
      expect(() => aNumber({})).to.throw(ParserError);
    });
  });
});
