import {ParserError, ParserInput, ParseFn} from './index';
import {isNil} from '../util';

export const pNumber: ParseFn<number> = (x: ParserInput): number => {
  if (isNil(x)) {
    throw new ParserError('number', x);
  }

  if (typeof x === 'number') {
    return x;
  }
  throw new ParserError('number', typeof x);
};
