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
- Work in Progress: Return types

## Can I build bots with this?

If you're comfortable implementing your own network layer, yes. However, this is primarily intended to be consumed by other libraries which would provide concrete methods for calling the API directly.

## License

GPLv3

