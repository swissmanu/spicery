export type ParserInput = any;

export class ParserError extends Error {
  constructor(
    public readonly expected: string,
    public readonly found: string
  ) {
    super(`Expected ${expected} but found ${found}`);
  }
}

export function parse<T>(input: ParserInput, parser: (x: ParserInput) => T): T {
  return parser(input);
}
