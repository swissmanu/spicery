import ParserError from "../parserError";
import { ParseFn, ParserInput } from "../parserFn";
import { isNil } from "../util";

const aBoolean: ParseFn<boolean> = (x: ParserInput): boolean => {
  if (isNil(x)) {
    throw new ParserError("boolean", `${x}`);
  }

  if (typeof x === "boolean") {
    return x;
  }
  throw new ParserError("boolean", typeof x);
};

export default aBoolean;
