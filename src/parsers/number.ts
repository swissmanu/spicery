import {isNil} from 'ramda';
import {ParserError, ParserInput} from './index';

export const pNumber = (x: ParserInput) => {
  if (isNil(x)) {
    throw new ParserError('number', x);
  }

  if (typeof x === 'number') {
    return x;
  }
  throw new ParserError('number', typeof x);
};
