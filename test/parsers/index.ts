import {expect} from 'chai';
import {ParseFn, parse} from '../../src/parsers';

describe('Parser', () => {
  describe('parse', () => {
    it('should apply given parser to given input', (done) => {
      const parser: ParseFn<string> = x => {
        expect(x).to.be.equal('test');
        done();
        return '';
      };
      parse(parser)('test');
    });
  });
});
