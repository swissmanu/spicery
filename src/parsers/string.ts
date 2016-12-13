import {isNil} from 'ramda';
import {ParserError, ParserInput} from './index';

export const pString = (x: ParserInput) => {
  if (isNil(x)) {
    throw new ParserError('string', x);
  }

  if (typeof x === 'string') {
    return x;
  }
  throw new ParserError('string', typeof x);
};
