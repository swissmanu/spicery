import { aBoolean, booleans } from '../../src/parsers/boolean';
import { ParserError } from '../../src/parsers';

describe('Parser', () => {
  describe('aBoolean', () => {
    it('should return type boolean given a boolean', () => {
      expect(typeof aBoolean(true)).toBe('boolean');
    });

    it('should return given boolean', () => {
      expect(aBoolean(false)).toEqual(false);
    });

    it('should throw a ParserError when given null', () => {
      expect(() => aBoolean(null)).toThrow(ParserError);
    });

    it('should throw a ParserError when given undefined', () => {
      expect(() => aBoolean(undefined)).toThrow(ParserError);
    });

    it('should throw a ParserError when given a number', () => {
      expect(() => aBoolean(1)).toThrow(ParserError);
    });

    it('should throw a ParserError when given a string', () => {
      expect(() => aBoolean('test')).toThrow(ParserError);
    });

    it('should throw a ParserError when given an object', () => {
      expect(() => aBoolean({})).toThrow(ParserError);
    });
  });

  describe('booleans', () => {
    it('should be a synonym for aBoolean', () => {
      expect(booleans).toBe(aBoolean);
    });
  });
});
