import {expect} from 'chai';
import {isNil} from '../src/util';

describe('Util', () => {
  describe('isNil', () => {
    it('should return true for null', () => {
      expect(isNil(null)).to.equal(true);
    });

    it('should return true for undefined', () => {
      expect(isNil(undefined)).to.equal(true);
    });

    it('should return false for empty string', () => {
      expect(isNil('')).to.equal(false);
    });

    it('should return false for false', () => {
      expect(isNil(false)).to.equal(false);
    });

    it('should return false for true', () => {
      expect(isNil(true)).to.equal(false);
    });

    it('should return false for 0', () => {
      expect(isNil(0)).to.equal(false);
    });

    it('should return false for []', () => {
      expect(isNil([])).to.equal(false);
    });
  });
});
