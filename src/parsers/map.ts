import {ParserError, ParseFn, ParserInput} from './index';
import {isNil} from '../util';

export const fromMap = <T>(map: ParserInput, key: string, valueParser: ParseFn<T>): T => {
  if (isNil(map)) {
    throw new ParserError('Map', map);
  }

  if (typeof map !== 'object') {
    throw new ParserError('Map', map);
  }

  const value = map[key];

  if (isNil(value)) {
    throw new ParserError(`Map containing key ${key}`, JSON.stringify(map));
  }

  return valueParser(value);
};
