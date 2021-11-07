import { isNil } from "../util";
import { ParseFn, ParserError, ParserInput } from "./index";

const aString: ParseFn<string> = (x: ParserInput): string => {
  if (isNil(x)) {
    throw new ParserError("string", `${x}`);
  }

  if (typeof x === "string") {
    return x;
  }
  throw new ParserError("string", typeof x);
};

export default aString;
