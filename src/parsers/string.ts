import {isNil} from 'ramda';
import {ParserError, ParserInput, ParseFn} from './index';

export const pString: ParseFn<string> = (x: ParserInput): string => {
  if (isNil(x)) {
    throw new ParserError('string', x);
  }

  if (typeof x === 'string') {
    return x;
  }
  throw new ParserError('string', typeof x);
};
