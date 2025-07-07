# Telegram Bot API in Typescript

Auto-generated types for the Telegram bot API. Produced by regularly parsing documentation and published as an NPM package.

## Why?

Telegram provides a rich API for implementing bots. While Telegram publishes detailed documentation, they do not provide machine-readable schemas. This has resulted in most libraries being unable to provide full type coverage for their methods.

This library attempts to change that.

## How?

A [codegen script](/src/codegen.ts) is regularly executed, which parses the HTML documentation and outputs a [TypeScript definition file](/dist/TelegramBotBindings.d.ts).

This process is somewhat brittle, but the output is high quality, including:

- Every type definition
- Options for every exposed method
- JSDoc annonations for everything
- Return types for every method

## Can I build bots with this?

If you're comfortable implementing your own network layer, yes. However, this is primarily intended to be consumed by other libraries which would provide concrete methods for calling the API directly.

## Correctness of Types

It seems like the docs are written by hand because of small inconsistencies. This requires...

1. Fault-tolerant code
2. Hard-coded exceptions to rules
3. Ad-hoc string matching and regular expressions

This is where the brittleness comes from: changes in language to the docs can cause types to be incorrect. If you spot a case of a type being incorrect, please open an issue.

## Conventions

### Types

Type names are kept verbatim from the documentation, and exported as interfaces. If a type is used to refer to other types, a type alias union is used.

### Methods

For each method there are two types exported. For input, the format is `[methodName]Options`. For the return type, the format is `[methodName]Result`

## Future Work

Future work will involve keeping up to date with documentation changes, fixing errors in output, and evolving the JSDoc annotation quality.

## License

GPLv3

