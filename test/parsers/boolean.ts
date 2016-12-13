import {expect} from 'chai';
import {pBoolean} from '../../src/parsers/boolean';
import {ParserError} from '../../src/parsers';

describe('Parser', () => {
  describe('pBoolean', () => {
    it('should return type boolean given a boolean', () => {
      expect(pBoolean(true)).to.be.a('boolean');
    });

    it('should return given boolean', () => {
      expect(pBoolean(false)).is.eql(false);
    });

    it('should throw a ParserError when given null', () => {
      expect(() => pBoolean(null)).to.throw(ParserError);
    });

    it('should throw a ParserError when given undefined', () => {
      expect(() => pBoolean(undefined)).to.throw(ParserError);
    });

    it('should throw a ParserError when given a number', () => {
      expect(() => pBoolean(1)).to.throw(ParserError);
    });

    it('should throw a ParserError when given a string', () => {
      expect(() => pBoolean('test')).to.throw(ParserError);
    });

    it('should throw a ParserError when given an object', () => {
      expect(() => pBoolean({})).to.throw(ParserError);
    });
  });
});
