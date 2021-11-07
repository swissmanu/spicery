/**
 * A `ParseFn` throws a `ParseError` when the `ParseInput` cannot be transformed to the parsers target type.
 */
export default class ParserError extends Error {
  constructor(public readonly expected: string, public readonly found: string) {
    super(`Expected ${expected} but found ${found}`);
  }
}
