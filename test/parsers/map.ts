import {expect} from 'chai';
import {ParserError} from '../../src/parsers';
import {fromMap} from '../../src/parsers/map';
import {aBoolean} from '../../src/parsers/boolean';

describe('Parser', () => {
  describe('fromMap', () => {
    it('should run nested parser and return result', () => {
      expect(fromMap({ a: true }, 'a', aBoolean)).to.eql(true);
    });

    it('should throw a ParserError when given map does not contain key', () => {
      expect(() => fromMap({ b: false }, 'a', aBoolean)).to.throw(ParserError);
    });

    it('should throw a ParserError when given value parser fails', () => {
      expect(() => fromMap({ a: 'test' }, 'a', aBoolean)).to.throw(ParserError);
    });

    it('should throw a ParserError when given null', () => {
      expect(() => fromMap(null, 'a', aBoolean)).to.throw(ParserError);
    });

    it('should throw a ParserError when given undefined', () => {
      expect(() => fromMap(undefined, 'a', aBoolean)).to.throw(ParserError);
    });

    it('should throw a ParserError when given a number', () => {
      expect(() => fromMap(1, 'a', aBoolean)).to.throw(ParserError);
    });

    it('should throw a ParserError when given a string', () => {
      expect(() => fromMap('test', 'a', aBoolean)).to.throw(ParserError);
    });
  });
});
