import { isNil } from "../util";
import { ParseFn, ParserError, ParserInput } from "./index";

const aNumber: ParseFn<number> = (x: ParserInput): number => {
  if (isNil(x)) {
    throw new ParserError("number", `${x}`);
  }

  if (typeof x === "number") {
    return x;
  }
  throw new ParserError("number", typeof x);
};

export default aNumber;
