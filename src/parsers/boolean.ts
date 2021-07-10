import { isNil } from "../util";
import { ParseFn, ParserError, ParserInput } from "./index";

const aBoolean: ParseFn<boolean> = (x: ParserInput): boolean => {
  if (isNil(x)) {
    throw new ParserError("boolean", x);
  }

  if (typeof x === "boolean") {
    return x;
  }
  throw new ParserError("boolean", typeof x);
};

export default aBoolean;
