import {isNil} from 'ramda';
import {ParserError, ParserInput} from './index';

export const pBoolean = (x: ParserInput) => {
  if (isNil(x)) {
    throw new ParserError('boolean', x);
  }

  if (typeof x === 'boolean') {
    return x;
  }
  throw new ParserError('boolean', typeof x);
};
