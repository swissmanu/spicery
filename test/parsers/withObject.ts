import { ParserError, withObject } from "../../src";

describe("Parser", () => {
  describe("withObject()", () => {
    const object = { foo: "bar" };
    const probe = jest.fn();

    beforeEach(() => {
      probe.mockClear();
    });

    test("calls provided function with the parsed object, when parsing a valid object", () => {
      withObject(probe)(object);
      expect(probe).toBeCalledWith(object);
    });

    test("throws a ParserError when parsing null and does not call the provided function", () => {
      expect(() => withObject(probe)(null)).toThrow(ParserError);
      expect(probe).not.toBeCalled();
    });

    test("throws a ParserError when parsing undefined and does not call the provided function", () => {
      expect(() => withObject(probe)(undefined)).toThrow(ParserError);
      expect(probe).not.toBeCalled();
    });

    test("throws a ParserError when parsing an array and does not call the provided function", () => {
      expect(() => withObject(probe)([])).toThrow(ParserError);
      expect(probe).not.toBeCalled();
    });

    test("throws a ParserError when parsing an string and does not call the provided function", () => {
      expect(() => withObject(probe)("")).toThrow(ParserError);
      expect(probe).not.toBeCalled();
    });

    test("throws a ParserError when parsing an boolean and does not call the provided function", () => {
      expect(() => withObject(probe)(true)).toThrow(ParserError);
      expect(probe).not.toBeCalled();
    });

    test("throws a ParserError when parsing an number and does not call the provided function", () => {
      expect(() => withObject(probe)(42)).toThrow(ParserError);
      expect(probe).not.toBeCalled();
    });

    test("throws a ParserError when parsing a Map and does not call the provided function", () => {
      expect(() => withObject(probe)(new Map())).toThrow(ParserError);
      expect(probe).not.toBeCalled();
    });
  });
});
