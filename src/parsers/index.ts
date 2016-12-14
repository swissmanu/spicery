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
 * A quick way to apply a `ParseFn` to a given `ParseInput`.
 */
export function parse<T>(parser: ParseFn<T>, input: ParserInput): T {
  return parser(input);
}
