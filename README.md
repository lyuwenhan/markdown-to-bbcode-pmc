# Markdown to BBCode Converter

Convert Markdown to BBCode for Planet Minecraft.

## Installation

```bash
npm install markdown-to-bbcode-pmc
```

## Usage

```js
import { markdownToBBCode } from "markdown-to-bbcode-pmc";

const markdown = `
# Title

This is **bold** text.

[Planet Minecraft](https://www.planetminecraft.com)

- a
- b
- c

\`\`\`js
console.log("hello");
\`\`\`
`;

const bbcode = markdownToBBCode(markdown);
console.log(bbcode);
```

## Output Example

```text
[h1]Title[/h1]
This is [b]bold[/b] text.
[url=https://www.planetminecraft.com]Planet Minecraft[/url]
[list]
[*]a[/*]
[*]b[/*]
[*]c[/*]
[/list]
[code]
console.log("hello");
[/code]
```

## Supported Syntax

This package currently supports the following Markdown syntax:

- Headings (`#` to `######`) -> `[h1]` to `[h6]`
- Links (`[text](url)`) -> `[url=url]text[/url]`
- Bold (`**text**`) -> `[b]text[/b]`
- Inline code (`` `text` ``) -> `[b]text[/b]`
- Unordered lists -> `[list]` and `[*]`
- Fenced code blocks -> `[code]...[/code]`
- GFM tables -> `[table]`, `[tbody]`, `[tr]`, `[th]`, `[td]`
- Blockquotes -> `[quote]...[/quote]`
- Horizontal rules -> `[hr]`

## Notes

- This package is designed specifically for Planet Minecraft BBCode output.
- Inline code is converted to `[b]...[/b]` by design.
- The language name of fenced code blocks is ignored.
- Only the syntax listed above is guaranteed to be supported.
- Some Markdown features may be passed through as plain text or simplified output.

## API

### `markdownToBBCode(markdown)`

Converts a Markdown string into Planet Minecraft-style BBCode.

#### Parameters

- `markdown` (`string`): The Markdown source text.

#### Returns

- `string`: The converted BBCode output.

#### Throws

- `TypeError`: Thrown if `markdown` is not a string.

## License

MIT
