# spicery

> Runtime type safety for JSON/untyped data.

[TypeScript](https://www.typescriptlang.org/) gives you compile-time type safety for your JavaScript code. External data which you get through, for example, XHR calls is only checkable at runtime. `spicery` allows you to handle runtime checks in one place using an easy to use API.

## Examples

```typescript
// You know TypeScript Interfaces:
interface Todo { userId: number; id: number; title: string; completed: boolean; }

// This is new: Define a Todo Parser with spicery:
const todos: ParserFn<Todo> = x => ({
  userId:    fromMap(x, 'userId', aNumber),
  id:        fromMap(x, 'id', aNumber),
  title:     fromMap(x, 'title', aString),
  completed: fromMap(x, 'completed', aBoolean)
});

// Define another Parser for an Array containing Todos using spicery array parser:
const jsonplaceholderTodos = anArrayContaining(todos);

// Fetch Todos and parse them:
window.fetch('https://jsonplaceholder.typicode.com/todos')
  .then(r => parse(jsonPlaceholderTodos)(r.body))
  .then(t => console.log(t))
```

For further examples refer to the `examples/` directory. To execute them locally, clone this repository and run following commands on your command line of choice:

```bash
yarn
yarn run example:simple
yarn run example:complex
```

*Though the first `yarn` command is only used to install any module dependencies once* 🤓
