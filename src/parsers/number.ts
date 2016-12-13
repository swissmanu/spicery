import {isNil} from 'ramda';
import {ParserError} from './index';

export const pNumber = (x: any) => {
  if (isNil(x)) {
    throw new ParserError('number', x);
  }

  if (typeof x === 'number') {
    return x;
  }
  throw new ParserError('number', typeof x);
};
