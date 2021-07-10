import { ParseFn, ParserError, ParserInput } from ".";
import { isNil } from "../util";

/**
 * Tries to parse an object. When object is present, provided `fn` is called with the object as first parameter.
 *
 * @param fn
 * @returns
 */
export default function withObject<T>(fn: (object: Record<string, ParserInput>) => T): ParseFn<T> {
  return (x) => {
    if (isNil(x)) {
      throw new ParserError("Object", x);
    }

    if (Object.prototype.toString.call(x) !== "[object Object]") {
      throw new ParserError("Object", x);
    }

    return fn(x);
  };
}
