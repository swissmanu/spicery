import {isNil} from 'ramda';
import {ParserError, ParserInput} from './index';

export function pArray<T>(itemParser: (x: ParserInput) => T): (x: ParserInput) => T[] {
  return (x: any) => {
    if (isNil(x)) {
      throw new ParserError('Array', x);
    }

    if (Array.isArray(x)) {
      return x.map(itemParser);
    }
    throw new ParserError('Array', typeof x);
  };
};
