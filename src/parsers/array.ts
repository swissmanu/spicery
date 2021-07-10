import { isNil } from "../util";
import { ParseFn, ParserError, ParserInput } from "./index";

const anArrayContaining =
  <T>(itemParser: ParseFn<T>): ParseFn<T[]> =>
  (x: ParserInput): T[] => {
    if (isNil(x)) {
      throw new ParserError("Array", x);
    }

    if (Array.isArray(x)) {
      return x.map(itemParser);
    }
    throw new ParserError("Array", typeof x);
  };

export default anArrayContaining;
