import { isNil } from "../util";
import { ParseFn, ParserError, ParserInput } from "./index";

const fromObject = <T>(object: ParserInput, key: string, valueParser: ParseFn<T>): T => {
  if (isNil(object)) {
    throw new ParserError("Object", object);
  }

  if (typeof object !== "object") {
    throw new ParserError("Object", object);
  }

  if (!(key in object)) {
    throw new ParserError(`Object containing key ${key}`, JSON.stringify(object));
  }

  return valueParser(object[key]);
};

export default fromObject;
