export type ParserInput = any;
export type ParseFn<T> = (x: ParserInput) => T;

export class ParserError extends Error {
  constructor(
    public readonly expected: string,
    public readonly found: string
  ) {
    super(`Expected ${expected} but found ${found}`);
  }
}

export function parse<T>(input: ParserInput, parser: ParseFn<T>): T {
  return parser(input);
}
