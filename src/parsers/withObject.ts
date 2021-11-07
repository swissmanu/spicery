import ParserError from "../parserError";
import { ParseFn, ParserInput } from "../parserFn";
import { isNil } from "../util";

/**
 * Tries to parse an object. When object is present, provided `fn` is called with the object as first parameter.
 *
 * @param fn
 * @returns
 */
export default function withObject<T, O = Record<string, ParserInput>>(fn: (object: O) => T): ParseFn<T> {
  return (x: O) => {
    if (isNil(x)) {
      throw new ParserError("Object", typeof x);
    }

    if (Object.prototype.toString.call(x) !== "[object Object]") {
      throw new ParserError("Object", typeof x);
    }

    return fn(x);
  };
}
