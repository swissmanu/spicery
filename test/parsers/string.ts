import {expect} from 'chai';
import {pString} from '../../src/parsers/string';
import {ParserError} from '../../src/parsers';

describe('Parser', () => {
  describe('pString', () => {
    it('should return type string', () => {
      expect(pString('test')).to.be.a('string');
    });

    it('should return given string', () => {
      expect(pString('test')).is.eql('test');
    });

    it('should throw a ParserError when given null', () => {
      expect(() => pString(null)).to.throw(ParserError);
    });

    it('should throw a ParserError when given undefined', () => {
      expect(() => pString(undefined)).to.throw(ParserError);
    });

    it('should throw a ParserError when given a number', () => {
      expect(() => pString(1)).to.throw(ParserError);
    });

    it('should throw a ParserError when given a boolean', () => {
      expect(() => pString(true)).to.throw(ParserError);
    });

    it('should throw a ParserError when given an object', () => {
      expect(() => pString({})).to.throw(ParserError);
    });
  });
});
