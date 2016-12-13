import {isNil} from 'ramda';
import {ParserError, ParseFn, ParserInput} from './index';

export const pArray = <T>(itemParser: ParseFn<T>): ParseFn<T[]> =>
  (x: ParserInput): T[] => {
    if (isNil(x)) {
      throw new ParserError('Array', x);
    }

    if (Array.isArray(x)) {
      return x.map(itemParser);
    }
    throw new ParserError('Array', typeof x);
  };
