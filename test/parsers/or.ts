import or from "../../src/parsers/or";

describe("Parser", () => {
  describe("or", () => {
    test("returns the result of the first parser, if it can be executed successfully", () => {
      const a = jest.fn(() => "a");
      const b = jest.fn(() => "b");
      const input = "42";

      const result = or(a, b)(input);

      expect(result).toEqual("a");
      expect(a).toBeCalledWith(input);
      expect(b).not.toBeCalled();
    });

    test("returns the result of the second parser, if the first failed", () => {
      const a = jest.fn(() => {
        throw new Error();
      });
      const b = jest.fn(() => "b");
      const input = "42";

      const result = or(a, b)(input);

      expect(result).toEqual("b");
      expect(a).toBeCalledWith(input);
      expect(b).toBeCalledWith(input);
    });

    test("propagates the error thrown by the second parser, if it could not be executed successfully", () => {
      const a = jest.fn(() => {
        throw new Error();
      });
      const b = jest.fn(() => {
        throw new Error("b");
      });
      const input = "42";

      expect(() => or(a, b)(input)).toThrowError("b");
      expect(a).toBeCalledWith(input);
      expect(b).toBeCalledWith(input);
    });
  });
});
