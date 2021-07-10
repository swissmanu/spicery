import { ParserError } from "../../src/parsers";
import aString from "../../src/parsers/string";

describe("Parser", () => {
  describe("aString", () => {
    it("should return type string", () => {
      expect(typeof aString("test")).toBe("string");
    });

    it("should return given string", () => {
      expect(aString("test")).toEqual("test");
    });

    it("should throw a ParserError when given null", () => {
      expect(() => aString(null)).toThrow(ParserError);
    });

    it("should throw a ParserError when given undefined", () => {
      expect(() => aString(undefined)).toThrow(ParserError);
    });

    it("should throw a ParserError when given a number", () => {
      expect(() => aString(1)).toThrow(ParserError);
    });

    it("should throw a ParserError when given a boolean", () => {
      expect(() => aString(true)).toThrow(ParserError);
    });

    it("should throw a ParserError when given an object", () => {
      expect(() => aString({})).toThrow(ParserError);
    });
  });
});
