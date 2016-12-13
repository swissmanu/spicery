import {isNil} from 'ramda';
import {ParserError} from './index';

export const pBoolean = (x: any) => {
  if (isNil(x)) {
    throw new ParserError('boolean', x);
  }

  if (typeof x === 'boolean') {
    return x;
  }
  throw new ParserError('boolean', typeof x);
};
