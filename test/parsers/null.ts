import { ParserError } from "../../src/parsers";
import aNull from "../../src/parsers/null";

describe("Parser", () => {
  describe("aNull", () => {
    it("should return null", () => {
      expect(aNull(null)).toBeNull();
    });

    it("should throw a ParserError when given number", () => {
      expect(() => aNull(42)).toThrow(ParserError);
    });

    it("should throw a ParserError when given undefined", () => {
      expect(() => aNull(undefined)).toThrow(ParserError);
    });

    it("should throw a ParserError when given a boolean", () => {
      expect(() => aNull(false)).toThrow(ParserError);
    });

    it("should throw a ParserError when given a string", () => {
      expect(() => aNull("test")).toThrow(ParserError);
    });

    it("should throw a ParserError when given an object", () => {
      expect(() => aNull({})).toThrow(ParserError);
    });
  });
});
