import { isNil } from '../src/util';

describe('Util', () => {
  describe('isNil', () => {
    it('should return true for null', () => {
      expect(isNil(null)).toEqual(true);
    });

    it('should return true for undefined', () => {
      expect(isNil(undefined)).toEqual(true);
    });

    it('should return false for empty string', () => {
      expect(isNil('')).toEqual(false);
    });

    it('should return false for false', () => {
      expect(isNil(false)).toEqual(false);
    });

    it('should return false for true', () => {
      expect(isNil(true)).toEqual(false);
    });

    it('should return false for 0', () => {
      expect(isNil(0)).toEqual(false);
    });

    it('should return false for []', () => {
      expect(isNil([])).toEqual(false);
    });
  });
});
