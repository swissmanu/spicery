import { aNumber, numbers } from '../../src/parsers/number';
import { ParserError } from '../../src/parsers';

describe('Parser', () => {
  describe('aNumber', () => {
    it('should return type number given a number', () => {
      expect(typeof aNumber(1)).toBe('number');
    });

    it('should return given number', () => {
      expect(aNumber(42)).toEqual(42);
    });

    it('should throw a ParserError when given null', () => {
      expect(() => aNumber(null)).toThrow(ParserError);
    });

    it('should throw a ParserError when given undefined', () => {
      expect(() => aNumber(undefined)).toThrow(ParserError);
    });

    it('should throw a ParserError when given a boolean', () => {
      expect(() => aNumber(false)).toThrow(ParserError);
    });

    it('should throw a ParserError when given a string', () => {
      expect(() => aNumber('test')).toThrow(ParserError);
    });

    it('should throw a ParserError when given an object', () => {
      expect(() => aNumber({})).toThrow(ParserError);
    });
  });

  describe('numbers', () => {
    it('should be a synonym for aNumber', () => {
      expect(numbers).toBe(aNumber);
    });
  });
});
