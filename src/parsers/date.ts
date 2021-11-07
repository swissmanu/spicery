import ParserError from "../parserError";
import { ParseFn, ParserInput } from "../parserFn";
import { isNil } from "../util";

const aDate: ParseFn<Date> = (x: ParserInput): Date => {
  if (isNil(x)) {
    throw new ParserError("date", `${x}`);
  }

  if (x instanceof Date) {
    return x;
  }

  if (typeof x === "string") {
    const millis = Date.parse(x);
    if (!Number.isNaN(millis)) {
      return new Date(millis);
    }
  }

  throw new ParserError("date", typeof x);
};

export default aDate;
