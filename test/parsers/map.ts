import {expect} from 'chai';
import {ParserError} from '../../src/parsers';
import {usingMap} from '../../src/parsers/map';
import {pBoolean} from '../../src/parsers/boolean';

describe('Parser', () => {
  describe('usingMap', () => {
    it('should run nested parser and return result', () => {
      expect(usingMap({ a: true }, 'a', pBoolean)).to.eql(true);
    });

    it('should throw a ParserError when given map does not contain key', () => {
      expect(() => usingMap({ b: false }, 'a', pBoolean)).to.throw(ParserError);
    });

    it('should throw a ParserError when given value parser fails', () => {
      expect(() => usingMap({ a: 'test' }, 'a', pBoolean)).to.throw(ParserError);
    });

    it('should throw a ParserError when given null', () => {
      expect(() => usingMap(null, 'a', pBoolean)).to.throw(ParserError);
    });

    it('should throw a ParserError when given undefined', () => {
      expect(() => usingMap(undefined, 'a', pBoolean)).to.throw(ParserError);
    });

    it('should throw a ParserError when given a number', () => {
      expect(() => usingMap(1, 'a', pBoolean)).to.throw(ParserError);
    });

    it('should throw a ParserError when given a string', () => {
      expect(() => usingMap('test', 'a', pBoolean)).to.throw(ParserError);
    });
  });
});
