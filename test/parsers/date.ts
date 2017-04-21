import {expect} from 'chai';
import {aDate, dates} from '../../src/parsers/date';
import {ParserError} from '../../src/parsers';

describe('Parser', () => {
  describe('aDate', () => {
    it('should return type date', () => {
      expect(aDate('2015-05-11T10:20:42.511Z')).to.be.a('date');
    });

    it('should return given date', () => {
      const d = new Date('2015-05-11T10:20:42.511Z');
      expect(aDate(d)).is.eql(d);
    });

    it('should return a date when given a string', () => {
      const dateString = '2016-02-25T08:10:43.511Z';
      const d = new Date(dateString);
      expect(aDate(dateString)).is.eql(d);
    });

    it('should throw a ParserError when given an invalid date string', () => {
      expect(() => aDate('so invalid')).to.throw(ParserError);
    });

    it('should throw a ParserError when given null', () => {
      expect(() => aDate(null)).to.throw(ParserError);
    });

    it('should throw a ParserError when given undefined', () => {
      expect(() => aDate(undefined)).to.throw(ParserError);
    });

    it('should throw a ParserError when given a number', () => {
      expect(() => aDate(1)).to.throw(ParserError);
    });

    it('should throw a ParserError when given a boolean', () => {
      expect(() => aDate(true)).to.throw(ParserError);
    });

    it('should throw a ParserError when given an object', () => {
      expect(() => aDate({})).to.throw(ParserError);
    });
  });

  describe('dates', () => {
    it('should be a synonym for aDate', () => {
      expect(dates).to.be.equal(aDate);
    });
  });
});
