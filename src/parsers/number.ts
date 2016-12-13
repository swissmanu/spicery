import {isNil} from 'ramda';
import {ParserError, ParserInput, ParseFn} from './index';

export const pNumber: ParseFn<number> = (x: ParserInput): number => {
  if (isNil(x)) {
    throw new ParserError('number', x);
  }

  if (typeof x === 'number') {
    return x;
  }
  throw new ParserError('number', typeof x);
};
