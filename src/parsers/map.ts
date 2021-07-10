import { isNil } from "../util";
import { ParseFn, ParserError, ParserInput } from "./index";

const fromMap = <T>(map: ParserInput, key: string, valueParser: ParseFn<T>): T => {
  if (isNil(map)) {
    throw new ParserError("Map", map);
  }

  if (typeof map !== "object") {
    throw new ParserError("Map", map);
  }

  if (!(key in map)) {
    throw new ParserError(`Map containing key ${key}`, JSON.stringify(map));
  }

  return valueParser(map[key]);
};

export default fromMap;
