/**
 * A `ParseInput` can be transformed using a `ParseFn`.
 */
export type ParserInput = unknown;

/**
 * A `ParseFn` transforms a `ParseInput` to type `T`. It must throw a `ParseError` if the transformation can not be
 * done.
 */
export type ParseFn<T> = (x: ParserInput) => T;
