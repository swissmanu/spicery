import {isNil} from 'ramda';
import {ParserError} from './index';

export const pString = (x: any) => {
  if (isNil(x)) {
    throw new ParserError('string', x);
  }

  if (typeof x === 'string') {
    return x;
  }
  throw new ParserError('string', typeof x);
};
