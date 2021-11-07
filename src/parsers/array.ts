import ParserError from "../parserError";
import { ParseFn, ParserInput } from "../parserFn";
import { isNil } from "../util";

const anArrayContaining =
  <T>(itemParser: ParseFn<T>): ParseFn<T[]> =>
  (x: ParserInput): T[] => {
    if (isNil(x)) {
      throw new ParserError("Array", `${x}`);
    }

    if (Array.isArray(x)) {
      return x.map(itemParser);
    }
    throw new ParserError("Array", typeof x);
  };

export default anArrayContaining;
