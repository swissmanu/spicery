import {ParserError, ParserInput, ParseFn} from './index';
import {isNil} from '../util';

export const aBoolean: ParseFn<boolean> = (x: ParserInput): boolean => {
  if (isNil(x)) {
    throw new ParserError('boolean', x);
  }

  if (typeof x === 'boolean') {
    return x;
  }
  throw new ParserError('boolean', typeof x);
};

export const booleans = aBoolean;
