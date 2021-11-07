import { aDate, ParserError } from "../../src";

describe("Parser", () => {
  describe("aDate", () => {
    it("should return type date", () => {
      expect(aDate("2015-05-11T10:20:42.511Z")).toBeInstanceOf(Date);
    });

    it("should return given date", () => {
      const d = new Date("2015-05-11T10:20:42.511Z");
      expect(aDate(d)).toEqual(d);
    });

    it("should return a date when given a string", () => {
      const dateString = "2016-02-25T08:10:43.511Z";
      const d = new Date(dateString);
      expect(aDate(dateString)).toEqual(d);
    });

    it("should throw a ParserError when given an invalid date string", () => {
      expect(() => aDate("so invalid")).toThrow(ParserError);
    });

    it("should throw a ParserError when given null", () => {
      expect(() => aDate(null)).toThrow(ParserError);
    });

    it("should throw a ParserError when given undefined", () => {
      expect(() => aDate(undefined)).toThrow(ParserError);
    });

    it("should throw a ParserError when given a number", () => {
      expect(() => aDate(1)).toThrow(ParserError);
    });

    it("should throw a ParserError when given a boolean", () => {
      expect(() => aDate(true)).toThrow(ParserError);
    });

    it("should throw a ParserError when given an object", () => {
      expect(() => aDate({})).toThrow(ParserError);
    });
  });
});
