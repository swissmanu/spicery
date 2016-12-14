import {parse} from '../src/parsers';
import {strings} from '../src/parsers/string';
import {anArrayContaining} from '../src/parsers/array';

// Run this example using `npm run example:simple`

// Try to alter the content of this array. Put booleans, numbers, nested arrays
// etc. and rerun the example.
const untypedInformation: any = ['Apples', 'Pears', 'Peaches'];


try {
  const fruits: string[] = parse(anArrayContaining(strings), untypedInformation);

  console.log('Untyped data fulfills parser requirements. Typed result:');
  console.log(fruits);
} catch (e) {
  console.error(e);
}
