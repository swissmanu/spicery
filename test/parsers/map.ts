import { ParseFn, ParserError } from "../../src/parsers";
import aBoolean from "../../src/parsers/boolean";
import fromMap from "../../src/parsers/map";

describe("Parser", () => {
  describe("fromMap", () => {
    it("should run nested parser and return result", () => {
      expect(fromMap({ a: true }, "a", aBoolean)).toEqual(true);
    });

    it("should throw a ParserError when given map does not contain key", () => {
      expect(() => fromMap({ b: false }, "a", aBoolean)).toThrow(ParserError);
    });

    it("should throw a ParserError when given value parser fails", () => {
      expect(() => fromMap({ a: "test" }, "a", aBoolean)).toThrow(ParserError);
    });

    it("should throw a ParserError when given null", () => {
      expect(() => fromMap(null, "a", aBoolean)).toThrow(ParserError);
    });

    it("should throw a ParserError when given undefined", () => {
      expect(() => fromMap(undefined, "a", aBoolean)).toThrow(ParserError);
    });

    it("should throw a ParserError when given a number", () => {
      expect(() => fromMap(1, "a", aBoolean)).toThrow(ParserError);
    });

    it("should throw a ParserError when given a string", () => {
      expect(() => fromMap("test", "a", aBoolean)).toThrow(ParserError);
    });

    it('should not throw ParserError when given key exists and has value "null"', () => {
      const aNull: ParseFn<null> = (): null => null;
      expect(() => fromMap({ a: null }, "a", aNull)).not.toThrow();
    });
  });
});
