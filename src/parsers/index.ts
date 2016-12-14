/**
 * A `ParseInput` can be transformed using a `ParseFn`.
 */
export type ParserInput = any;

/**
 * A `ParseFn` transforms a `ParseInput` to type `T`. It must throw a `ParseError` if the transformation can not be
 * done.
 */
export type ParseFn<T> = (x: ParserInput) => T;

/**
 * A `ParseFn` throws a `ParseError` when the `ParseInput` cannot be transformed to the parsers target type.
 */
export class ParserError extends Error {
  constructor(
    public readonly expected: string,
    public readonly found: string
  ) {
    super(`Expected ${expected} but found ${found}`);
  }
}

/**
 * Syntactic sugar to lazy invoke a `ParseFn`; Creates a new `ParseFn` with given parser and returns it for later
 * invocation.
 */
export const parse = <T>(parser: ParseFn<T>): ParseFn<T> => (x) => parser(x);
