import {isNil} from 'ramda';
import {ParserError, ParserInput, ParseFn} from './index';

export const pBoolean: ParseFn<boolean> = (x: ParserInput): boolean => {
  if (isNil(x)) {
    throw new ParserError('boolean', x);
  }

  if (typeof x === 'boolean') {
    return x;
  }
  throw new ParserError('boolean', typeof x);
};
