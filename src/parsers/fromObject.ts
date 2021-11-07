import { isNil } from "../util";
import { ParseFn, ParserError, ParserInput } from "./index";

const fromObject = <T, O extends Record<string, ParserInput> = Record<string, ParserInput>>(
  object: O,
  key: keyof O,
  valueParser: ParseFn<T>
): T => {
  if (isNil(object)) {
    throw new ParserError("Object", `${object}`);
  }

  if (typeof object !== "object") {
    throw new ParserError("Object", `${object}`);
  }

  if (!(key in object)) {
    throw new ParserError(`Object containing key ${key}`, JSON.stringify(object));
  }

  return valueParser(object[key]);
};

export default fromObject;
