import { parse, ParseFn } from "../../src";

describe("Parser", () => {
  describe("parse", () => {
    it("should apply given parser to given input", (done) => {
      const parser: ParseFn<string> = (x) => {
        expect(x).toEqual("test");
        done();
        return "";
      };
      parse(parser)("test");
    });
  });
});
