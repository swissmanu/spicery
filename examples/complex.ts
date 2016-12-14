import {ParseFn, parse} from '../src/parsers';
import {fromMap} from '../src/parsers/map';
import {aString} from '../src/parsers/string';
import {aNumber} from '../src/parsers/number';
import {aBoolean} from '../src/parsers/boolean';
import {anArrayContaining} from '../src/parsers/array';

// Run this example using `npm run example:complex`

// Try to alter the content of this array. Put booleans, numbers, nested arrays
// etc. and rerun the example.
const untypedInformation: any = [
  {
    "name": "Alice",
    "age": 25,
    "blocked": false,
    "likes": [
      { name: "Apples", since: "2016-02-25T08:10:43.511Z" },
      { name: "Pears", since: "2015-05-11T10:20:42.511Z" }
    ]
  },
  {
    "name": "Bob",
    "age": 22,
    "blocked": false,
    "likes": []
  },
  {
    "name": "Mallory",
    "age": 25,
    "blocked": true,
    "likes": [{ name: "Garlic", since: "2014-01-23T18:10:43.511Z" }]
  }
];


// Type Definitions:
class Friend {
  constructor(
    public name: string,
    public age: number,
    public blocked: boolean,
    public likes: Like[]
  ) {}
}

interface Like {
  name: string;
  since: Date;
}

// Parsers for Type Definitions:
const aFriend: ParseFn<Friend> = (x) => new Friend(
  fromMap(x, 'name', aString),
  fromMap(x, 'age', aNumber),
  fromMap(x, 'blocked', aBoolean),
  fromMap(x, 'likes', anArrayContaining(aLike))
);

const aLike: ParseFn<Like> = (x) => ({
  name: fromMap(x, 'name', aString),
  since: fromMap(x, 'since', aDate)
});

const aDate: ParseFn<Date> = x => new Date(x);  // good enough ;)


// Apply Parser & Process Data:
try {
  parse(anArrayContaining(aFriend), untypedInformation)
    .map(f => {
      const likes = f.likes.reduce(
        (p, l) => `${p}${l.name} since ${l.since.toLocaleDateString()}, `, '');
      return `${f.name} likes ${likes.length > 0 ? likes : 'nothing,'}`;
    })
    .forEach(s => console.log(s));
} catch (e) {
  console.error(e);
}
