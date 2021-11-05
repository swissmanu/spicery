import { ParseFn } from ".";

export default function or<A, B>(parseA: ParseFn<A>, parseB: ParseFn<B>): ParseFn<A | B> {
  return (x) => {
    try {
      return parseA(x);
    } catch (_) {
      return parseB(x);
    }
  };
}
