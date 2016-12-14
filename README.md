# spicery

> Describe untyped data with spicery parsers and bring runtime type safety to your TypeScript application.

[TypeScript](https://www.typescriptlang.org/) is a great language to bring type safety during compile/development time to your JavaScript code. Many applications load information during runtime which cannot be checked using TypeScripts compiler though.

`spicery` gives you a [DSL](https://en.wikipedia.org/wiki/Domain-specific_language) to describe how JSON information must look like. This gives you in combination with TypeScript following key benefits:

* Description through simple DSL of externally loaded information gives type safety during development
* Parsers executed during runtime ensure compliance to specified data descriptions

## Examples
Please refer to the `examples/` directory. To execute them locally, clone this repository and run following commands on your command line of choice:

```bash
yarn
npm run example:simple
npm run example:complex
```

*Though the `yarn` command is only used to install any module dependencies once* 🤓
