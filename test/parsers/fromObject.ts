import { aBoolean, fromObject, ParseFn, ParserError } from "../../src";

describe("Parser", () => {
  describe("fromObject", () => {
    it("should run nested parser and return result", () => {
      expect(fromObject({ a: true }, "a", aBoolean)).toEqual(true);
    });

    it("should throw a ParserError when given object does not contain key", () => {
      expect(() => fromObject({ b: false }, "a" as never, aBoolean)).toThrow(ParserError);
    });

    it("should throw a ParserError when given value parser fails", () => {
      expect(() => fromObject({ a: "test" }, "a", aBoolean)).toThrow(ParserError);
    });

    it("should throw a ParserError when given null", () => {
      expect(() => fromObject(null, "a", aBoolean)).toThrow(ParserError);
    });

    it("should throw a ParserError when given undefined", () => {
      expect(() => fromObject(undefined, "a", aBoolean)).toThrow(ParserError);
    });

    it("should throw a ParserError when given a number", () => {
      expect(() => fromObject(1 as never, "a", aBoolean)).toThrow(ParserError);
    });

    it("should throw a ParserError when given a string", () => {
      expect(() => fromObject("test" as never, "a", aBoolean)).toThrow(ParserError);
    });

    it('should not throw ParserError when given key exists and has value "null"', () => {
      const aNull: ParseFn<null> = (): null => null;
      expect(() => fromObject({ a: null }, "a", aNull)).not.toThrow();
    });
  });
});
