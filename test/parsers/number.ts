import {expect} from 'chai';
import {pNumber} from '../../src/parsers/number';
import {ParserError} from '../../src/parsers';

describe('Parser', () => {
  describe('pNumber', () => {
    it('should return type number given a number', () => {
      expect(pNumber(1)).to.be.a('number');
    });

    it('should return given number', () => {
      expect(pNumber(42)).is.eql(42);
    });

    it('should throw a ParserError when given null', () => {
      expect(() => pNumber(null)).to.throw(ParserError);
    });

    it('should throw a ParserError when given undefined', () => {
      expect(() => pNumber(undefined)).to.throw(ParserError);
    });

    it('should throw a ParserError when given a boolean', () => {
      expect(() => pNumber(false)).to.throw(ParserError);
    });

    it('should throw a ParserError when given a string', () => {
      expect(() => pNumber('test')).to.throw(ParserError);
    });

    it('should throw a ParserError when given an object', () => {
      expect(() => pNumber({})).to.throw(ParserError);
    });
  });
});
