import { ParserError } from "../../src/parsers";
import anArrayContaining from "../../src/parsers/array";
import aString from "../../src/parsers/string";

describe("Parser", () => {
  describe("anArrayContaining", () => {
    it("should return type array given an array", () => {
      expect(anArrayContaining(aString)([])).toBeInstanceOf(Array);
    });

    it("should return given array", () => {
      expect(anArrayContaining(aString)(["test"])).toEqual(["test"]);
    });

    it("should use given item parser to parse items", () => {
      const itemParser = () => 42;
      expect(anArrayContaining(itemParser)(["1", 1, true])).toEqual([42, 42, 42]);
    });

    it("should throw a ParserError when given null", () => {
      expect(() => anArrayContaining(aString)(null)).toThrow(ParserError);
    });

    it("should throw a ParserError when given undefined", () => {
      expect(() => anArrayContaining(aString)(undefined)).toThrow(ParserError);
    });

    it("should throw a ParserError when given a number", () => {
      expect(() => anArrayContaining(aString)(1)).toThrow(ParserError);
    });

    it("should throw a ParserError when given a string", () => {
      expect(() => anArrayContaining(aString)("test")).toThrow(ParserError);
    });

    it("should throw a ParserError when given an object", () => {
      expect(() => anArrayContaining(aString)({})).toThrow(ParserError);
    });
  });
});
