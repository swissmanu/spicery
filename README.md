# spicery

> Describe JSON/untyped information with spicery parsers to bring runtime type safety to your TypeScript code.

[TypeScript](https://www.typescriptlang.org/) is a great language to bring type safety during compile/development time to your JavaScript code. Many applications load information during runtime which cannot be checked using TypeScripts compiler though.

`spicery` gives you a [DSL](https://en.wikipedia.org/wiki/Domain-specific_language) to describe the shape of JSON/untyped information and following key benefits:

* Descriptions provide type safety during development
* Parsers executed during runtime ensure compliance to specified descriptions
* Errors during runtime contain valuable information about what went wrong

## Examples

```typescript
// Describe how a todo looks like:
interface Todo { userId: number; id: number; title: string; completed: boolean; }

// Define a custom parser for Todo:
const todos: ParserFn<Todo> = x => ({
  userId:    fromMap(x, 'userId', aNumber),
  id:        fromMap(x, 'id', aNumber),
  title:     fromMap(x, 'title', aString),
  completed: fromMap(x, 'completed', aBoolean)
});

// Load Todos and ensure they comply with our Todo type:
window.fetch('https://jsonplaceholder.typicode.com/todos')
  .then(r => parse(anArrayContaining(todos)), r.body))
```

For further examples refer to the `examples/` directory. To execute them locally, clone this repository and run following commands on your command line of choice:

```bash
yarn
npm run example:simple
npm run example:complex
```

*Though the `yarn` command is only used to install any module dependencies once* 🤓
