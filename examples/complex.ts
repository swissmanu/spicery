import { parse, ParseFn, withObject } from "../src/parsers";
import anArrayContaining from "../src/parsers/array";
import aBoolean from "../src/parsers/boolean";
import aDate from "../src/parsers/date";
import fromObject from "../src/parsers/fromObject";
import aNumber from "../src/parsers/number";
import aString from "../src/parsers/string";

// Run this example using `npm run example:complex`

// Try to alter the content of this array. Put booleans, numbers, nested arrays
// etc. and rerun the example.
const untypedInformation: unknown = [
  {
    name: "Alice",
    age: 25,
    blocked: false,
    likes: [
      { name: "Apples", since: "2016-02-25T08:10:43.511Z" },
      { name: "Pears", since: "2015-05-11T10:20:42.511Z" },
    ],
  },
  {
    name: "Bob",
    age: 22,
    blocked: false,
    likes: [],
  },
  {
    name: "Mallory",
    age: 25,
    blocked: true,
    likes: [{ name: "Garlic", since: "2014-01-23T18:10:43.511Z" }],
  },
];

// Type Definitions:
class Friend {
  constructor(public name: string, public age: number, public blocked: boolean, public likes: Like[]) {}
}

interface Like {
  name: string;
  since: Date;
}

// Parsers for Type Definitions:
const friends: ParseFn<Friend> = withObject(
  (x) =>
    new Friend(
      fromObject(x, "name", aString),
      fromObject(x, "age", aNumber),
      fromObject(x, "blocked", aBoolean),
      fromObject(x, "likes", anArrayContaining(likes))
    )
);

const likes: ParseFn<Like> = withObject((x) => ({
  name: fromObject(x, "name", aString),
  since: fromObject(x, "since", aDate),
}));

// Apply Parser & Process Data:
try {
  parse(anArrayContaining(friends))(untypedInformation)
    .map((f) => {
      const likes = f.likes.reduce((p, l) => `${p}${l.name} since ${l.since.toLocaleDateString()}, `, "");
      return `${f.name} likes ${likes.length > 0 ? likes : "nothing,"}`;
    })
    .forEach((s) => console.log(s));
} catch (e) {
  console.error(e);
}
