import {expect} from 'chai';
import {aBoolean} from '../../src/parsers/boolean';
import {ParserError} from '../../src/parsers';

describe('Parser', () => {
  describe('aBoolean', () => {
    it('should return type boolean given a boolean', () => {
      expect(aBoolean(true)).to.be.a('boolean');
    });

    it('should return given boolean', () => {
      expect(aBoolean(false)).is.eql(false);
    });

    it('should throw a ParserError when given null', () => {
      expect(() => aBoolean(null)).to.throw(ParserError);
    });

    it('should throw a ParserError when given undefined', () => {
      expect(() => aBoolean(undefined)).to.throw(ParserError);
    });

    it('should throw a ParserError when given a number', () => {
      expect(() => aBoolean(1)).to.throw(ParserError);
    });

    it('should throw a ParserError when given a string', () => {
      expect(() => aBoolean('test')).to.throw(ParserError);
    });

    it('should throw a ParserError when given an object', () => {
      expect(() => aBoolean({})).to.throw(ParserError);
    });
  });
});
