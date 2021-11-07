import { ParseFn } from "../parserFn";

/**
 * Syntactic sugar to lazy invoke a `ParseFn`; Creates a new `ParseFn` with given parser and returns it for later
 * invocation.
 */
const parse =
  <T>(parser: ParseFn<T>): ParseFn<T> =>
  (x) =>
    parser(x);

export default parse;
