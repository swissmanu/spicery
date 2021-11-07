import { parse } from "../src/parsers";
import anArrayContaining from "../src/parsers/array";
import strings from "../src/parsers/string";

// Run this example using `npm run example:simple`

// Try to alter the content of this array. Put booleans, numbers, nested arrays
// etc. and rerun the example.
const untypedInformation: unknown = ["Apples", "Pears", "Peaches"];

try {
  const fruits: string[] = parse(anArrayContaining(strings))(untypedInformation);

  console.log("Untyped data fulfills parser requirements. Typed result:");
  console.log(fruits);
} catch (e) {
  console.error(e);
}
