import ParserError from "../parserError";
import { ParseFn } from "../parserFn";

const aNull: ParseFn<null> = (x) => {
  if (x === null) {
    return null;
  }
  throw new ParserError("null", typeof x);
};
export default aNull;
